addEventListener("DOMContentLoaded", function() {
    document.querySelector("#addThingForm").addEventListener("submit", addThing);
});

async function addThing(event) {
    event.preventDefault();

    const thing = {
        name: document.getElementById('name').value,
        maker: document.getElementById('maker').value,
        amount: document.getElementById('amount').value,
        category: document.getElementById('category').value
    };

    try {
        const response = await fetch("https://sdev255-j6mt.onrender.com/api/things", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(thing)
        });

        if (response.ok) {
            const results = await response.json();
            console.log('Success:', results, results._id);
            alert('Thing added successfully!');
            document.querySelector("form").reset();
        } else {
            document.querySelector("#error").innerHTML = "Error adding thing.";
            const errorData = await response.json();
            alert(`Failed to add thing: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Error adding thing:', error);
        alert('A network error occurred. Please try again.');
    }
}