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
    const url = `/api/things/${thingId}`; 

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