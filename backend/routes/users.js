router.post('/auth', async (request, response) => {

const express = require('express');
const router = express.Router();
const User = require('./models/User');

const SECRET = 'fart'; 
const jwt = require('jwt-simple');
    
    if (!request.body.username || !request.body.password) {
        return response.status(400).json({ error: 'Missing username or password' });
    }

    try {
        const user = await User.findOne({ username: request.body.username });
        
        if (!user) { 
            return response.status(401).json({ error: 'Bad username' });
        }
        
        if (user.password !== request.body.password) {
            return response.status(401).json({ error: 'Bad password' });
        }

        const usernameTwo = user.username; 
        const token = jwt.encode(
            { username: user.username }, 
            SECRET
        );
        const auth = 1;
        response.json({
            usernameTwo, 
            token, 
            auth
        });

    } catch (error) {
        response.status(500).json({ error: 'Server error' });
    }
});

function checkAuth(request, response, next) {

    if (!request.headers.authorization) {
        return response.status(401).json({ error: 'Missing Authorization Header' });
    }
    const token = request.headers.authorization.split(' ')[1];

    try {
        const payload = jwt.decode(token, SECRET);
        request.username = payload.username; 
        next();

    } catch (error) {
        return response.status(401).json({ error: 'Invalid or Expired Token' });
    }
}

module.exports = {
    router: router,
    checkAuth: checkAuth
};