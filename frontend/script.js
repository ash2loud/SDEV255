addEventListener("DOMContentLoaded", async function(){
    const response = await fetch("http://localhost:2121/api/things");
    const things = await response.json();
    const list = document.getElementById("addedThings");

    let html="";
    for (let thing of things){
        html += `<li>${thing.name} &nbsp; (${thing.maker}) -
          <a href="thing.html?id=${thing._id}">Details</a><br></li>`;
    }

    document.querySelector("#addedThings").innerHTML = html;
});