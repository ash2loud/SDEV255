addEventListener("DOMContentLoaded", async function() {
    document.querySelector("#editThingButton").addEventListener("click", updateThing);

    const urlparam = new URLSearchParams(window.location.search);
    const thingID = urlparam.get("id");
    console.log("Thing ID:", thingID);
    const token = localStorage.getItem('token');

    const response = await fetch("https://sdev255-j6mt.onrender.com/api/things/" + thingID, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

        if (response.ok) {
            let thing = await response.json();
            document.querySelector("#thingID").value = thing._id;
            document.querySelector("#name").value = thing.name;
            document.querySelector("#maker").value = thing.maker;
            document.querySelector("#amount").value = thing.amount;
            document.querySelector("#category").value = thing.category;
        }
        else if (response.status === 401) {
         window.location.replace('/login.html');
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
    
    const token = localStorage.getItem('token');
    const apiUrl = `https://sdev255-j6mt.onrender.com/api/things/${ThingID}`;

    const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(thing)
    });

    if (response.ok) {
        alert("Thing updated successfully!");
        const updatedThing = await response.json();
        console.log("Thing updated successfully:", updatedThing);
    }
    else if (response.status === 401) {
         window.location.replace('/login.html');
    }
    else {
        document.querySelector("#error").innerHTML = "Error updating thing.";
        console.error("Error updating thing:", response.statusText);
    }
}