const express = require('express');
const app = express();

const PORT = process.env.PORT | 8000;
app.set('view engine', 'ejs');
app.get('/', (req, res)=>{
    res.render('home');
});
app.get('/login', (req, res)=>{
    res.render('login');
});
app.get('/register', (req, res)=>{
    res.render('register');
});
app.get('/profile', (req, res)=>{
    res.render('profile', {firstName: 'Ali', lastName: 'Zaib', email: 'sp19-bcs-028@cuilahore.edu.pk'});
});

app.listen(PORT, ()=>{
    console.log(`Listening to port ${PORT}`);
})