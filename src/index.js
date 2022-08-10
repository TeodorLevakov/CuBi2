const express = require('express');
const routes = require('./routes.js');
const { startDB } = require('./config/database.js');

const app = express();

require('./config/handlebars.js')(app);

app.use('/static', express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(routes);

startDB()
    .then(() => {
        app.listen(5000, () => console.log('Server is on....'));
    })
    .catch((err) => {
        console.log('Db not started', err);
    });