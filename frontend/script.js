addEventListener("DOMContentLoaded", async function(){
    const response = await fetch("http://localhost:2121/api/things");
    const things = await response.json();
    const list = document.getElementById("addedThings");

    let html="";
    for (let thing of things){
        html += `<li>${thing.name} (${thing.maker})</li>`;
    }

    document.querySelector("#addedThings").innerHTML = html;
});