addEventListener("DOMContentLoaded", async function(){
    const urlparam = new URLSearchParams(window.location.search);
    const thingID = urlparam.get("id");
    console.log("Thing ID:", thingID);

    const response = await fetch(`mongodb+srv://ash_dbadmin_7467:44826173@sdev255.o7hky5o.mongodb.net/?retryWrites=true&w=majority&appName=SDEV255/${thingID}`);
    const thing = await response.json();

    let heading = "";
    heading+=`Details for ${thing.name}`;
    document.querySelector("h1").innerText = heading;
    
    let html = "";
    html += `
        <h2>Maker: ${thing.maker}</h2>
        <p>Amount: ${thing.amount}</p>
        <p>Category: ${thing.category}</p>
    `;
    document.querySelector("div").innerHTML = html;
});