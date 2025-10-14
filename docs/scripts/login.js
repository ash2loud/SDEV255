function initLogin() {

    document.querySelector('#loginButton')
        .addEventListener('click', (event) => {
            const username = document.querySelector('#username').value;
            const password = document.querySelector('#password').value;
            login(username, password);
        });
}
initLogin();

async function login(uname, password) {
    const loginCredentials = { 
        username: uname, 
        password 
    };

    const url = '/api/auth';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginCredentials)
    });

    if (response.ok) {
        const tokenResponse = await response.json(); 
        
        const token = tokenResponse.token;
        const uname = tokenResponse.usernameTwo;
        const auth = tokenResponse.auth;

        localStorage.setItem('token', token);
        localStorage.setItem('username', uname);
        localStorage.setItem('auth', auth);
        
        window.location.replace('/index.html'); 
    }
    else {
        document.querySelector('#errorMessageDiv').innerHTML = 'Bad username and password'; 
    }
}