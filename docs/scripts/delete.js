document.addEventListener('DOMContentLoaded', () => {
    getAllThings();
    document.querySelector('#deleteButton').addEventListener('click', deleteThing);
});

function getSelectedThingId() {
    // Finds the currently selected option in the dropdown and returns its 'value' attribute, 
    // which holds the thing's unique MongoDB _id.
    const selectedId = document.querySelector('#thingDropDown option:checked').value; 
    return selectedId;
}

async function deleteThing() {
    const thingId = getSelectedThingId();
    const url = `https://sdev255-j6mt.onrender.com/api/things/${thingId}`; 

    const response = await fetch(url, {
        method: 'DELETE', 
    });

    if (response.ok) {
        alert('Thing Deleted!');
        // Refresh the dropdown list after deletion
        getAllThings(); 
    } else {
        document.querySelector('#error').innerHTML = 'Cannot delete.';
    }
}

async function getAllThings() {
    const response = await fetch('https://sdev255-j6mt.onrender.com/api/things');
    if (response.ok) {
        const things = await response.json();
        const dropdown = document.querySelector('#thingDropDown');
        dropdown.innerHTML = ''; // Clear previous options
        things.forEach(thing => {
            const option = document.createElement('option');
            option.value = thing._id;
            option.textContent = `${thing.name} (${thing.maker})`;
            dropdown.appendChild(option);
        });
    } else {
        document.querySelector('#error').innerHTML = 'Failed to load things.';
    }
}