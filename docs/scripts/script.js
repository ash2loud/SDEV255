addEventListener("DOMContentLoaded", async function() {

    const token = localStorage.getItem('token');
    
    if (!token) {
        console.error("No authorization token found.");
        window.location.replace('/login.html'); 
        return; 
    }

    const apiUrl = "https://sdev255-j6mt.onrender.com/api/things";
    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}` 
        }
    });

    if (response.ok) {
        const things = await response.json();
        const list = document.getElementById("addedThings");

        let html = "";
        for (let thing of things) {
            html += `<li>${thing.name} &nbsp; (${thing.maker}) -
              <a href="thing.html?id=${thing._id}">Details</a> | <a href="edit.html?id=${thing._id}">Edit</a><br></li>`;
        }

        document.querySelector("#addedThings").innerHTML = html;
    } else if (response.status === 401) {
        window.location.replace('/login.html');
    } else {
        console.error(`Failed to fetch things: ${response.status}`);
    }
});