const express = require('express');

const app = express();

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.send('Hi mot***Fu**r');
});



app.listen(5000, () => console.log('Server is on....'));