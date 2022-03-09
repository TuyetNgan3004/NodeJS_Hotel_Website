const express = require('express');
var handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
const route = require('./routes');
const path = require('path');
const port = 2503;
const connection = require('./config/database/connection');

connection.connect();

var hbs = handlebars.create({
   extname: 'hbs'
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(express.static(__dirname + '/public'));
app.use('/static', express.static(path.join(__dirname, 'public')));

route(app)

app.listen(port, () => {
   console.log(`app listen at http://localhost:${port}`);
})
