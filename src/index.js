const express = require('express');
const handlebars = require('express-handlebars');
const routes = require('./routes.js');

const app = express();

app.use('/static', express.static('public'));
app.engine('hbs', handlebars.engine({
    extname : 'hbs'}));
app.set('view engine', 'hbs');

app.set('views', './src/views');

app.get('/', (req, res) => {
    res.render('index');
});

app.use(routes);





app.listen(5000, () => console.log('Server is on....'));