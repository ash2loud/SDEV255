addEventListener("DOMContentLoaded", async function(){
    const response = await fetch("mongodb+srv://ash_dbadmin_7467:44826173@sdev255.o7hky5o.mongodb.net/?retryWrites=true&w=majority&appName=SDEV255");
    const things = await response.json();
    const list = document.getElementById("addedThings");

    let html="";
    for (let thing of things){
        html += `<li>${thing.name} &nbsp; (${thing.maker}) -
          <a href="thing.html?id=${thing._id}">Details</a> | <a href="edit.html?id=${thing._id}">Edit</a><br></li>`;
    }

    document.querySelector("#addedThings").innerHTML = html;
});