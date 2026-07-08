const express = require('express');

const app = express(); 

app.get('/', (req, res) => {
    
    res.send('hi sanjeev');
});
app.get('/about', (req, res) => {
    res.send('hi sanjeev about');
});
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });