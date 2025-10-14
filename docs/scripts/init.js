const auth = new Auth(); 

document.querySelector('#logoutButton')
    .addEventListener('click', (event) => {
        auth.logout(); 
    });