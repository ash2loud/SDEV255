document.addEventListener('DOMContentLoaded', () => {
    getAllThings();
    document.querySelector('#deleteButton').addEventListener('click', deleteThing);
});

function getSelectedThingId() {
    const selectedId = document.querySelector('#thingDropDown option:checked').value; 
    return selectedId;
}

async function deleteThing() {
    const thingId = getSelectedThingId();
    const url = `https://sdev255-j6mt.onrender.com/api/things/${thingId}`; 
    const token = localStorage.getItem('token');
    
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
             'Authorization': `Bearer ${token}`
        }
    });

    if (response.ok) {
        alert('Thing Deleted!');
        // refreshes the dropdown list after deletion
        getAllThings(); 
    } 
    else if (response.status === 401) {
         window.location.replace('/login.html');
    }
     else {
        document.querySelector('#error').innerHTML = 'Cannot delete.';
    }
}

async function getAllThings() {
const token = localStorage.getItem('token');
    const response = await fetch('https://sdev255-j6mt.onrender.com/api/things', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (response.ok) {
        const things = await response.json();
        const dropdown = document.querySelector('#thingDropDown');
        dropdown.innerHTML = '';
        things.forEach(thing => {
            const option = document.createElement('option');
            option.value = thing._id;
            option.textContent = `${thing.name} (${thing.maker})`;
            dropdown.appendChild(option);
        });
    } 
    else if (response.status === 401) {
        window.location.replace('/login.html');
    } 
    else {
        document.querySelector('#error').innerHTML = 'Failed to load things.';
    }
}