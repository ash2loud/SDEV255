addEventListener("DOMContentLoaded", async function() {
    document.querySelector("#editThingButton").addEventListener("click", updateThing);
        const urlparam = new URLSearchParams(window.location.search);
        const thingID = urlparam.get("id");
        console.log("Thing ID:", thingID);
        const response = await fetch("http://localhost:2121/api/things/" + thingID);

        if (response.ok) {
            let thing = await response.json();
            document.querySelector("#thingID").value = thing._id;
            document.querySelector("#name").value = thing.name;
            document.querySelector("#maker").value = thing.maker;
            document.querySelector("#amount").value = thing.amount;
            document.querySelector("#category").value = thing.category;
        }
    });

    async function updateThing(){
        const ThingID = document.querySelector("#thingID").value;
        const thing = {
        name: document.getElementById('name').value,
        maker: document.getElementById('maker').value,
        amount: document.getElementById('amount').value,
        category: document.getElementById('category').value
    }
    const response = await fetch("http://localhost:2121/api/things/" + ThingID, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(thing)
    });

    if (response.ok) {
        alert("Thing updated successfully!");
        const updatedThing = await response.json();
        console.log("Thing updated successfully:", updatedThing);
    } else {
        document.querySelector("#error").innerHTML = "Error updating thing.";
        console.error("Error updating thing:", response.statusText);
    }
}