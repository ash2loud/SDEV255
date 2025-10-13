addEventListener("DOMContentLoaded", async function() {
    document.querySelector("#editThingButton").addEventListener("click", updateThing);
        const urlparam = new URLSearchParams(window.location.search);
        const thingID = urlparam.get("id");
        console.log("Thing ID:", thingID);
        const response = await fetch("https://sdev255-j6mt.onrender.com" + thingID);

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
    const response = await fetch("mongodb+srv://ash_dbadmin_7467:44826173@sdev255.o7hky5o.mongodb.net/?retryWrites=true&w=majority&appName=SDEV255" + ThingID, {
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