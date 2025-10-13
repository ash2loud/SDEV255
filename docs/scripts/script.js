addEventListener("DOMContentLoaded", async function(){
    const response = await fetch("https://sdev255-j6mt.onrender.com");
    const things = await response.json();
    const list = document.getElementById("addedThings");

    let html="";
    for (let thing of things){
        html += `<li>${thing.name} &nbsp; (${thing.maker}) -
          <a href="thing.html?id=${thing._id}">Details</a> | <a href="edit.html?id=${thing._id}">Edit</a><br></li>`;
    }

    document.querySelector("#addedThings").innerHTML = html;
});