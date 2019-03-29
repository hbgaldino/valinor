var express = require('express');
var routes = require("./src/routes");
var db = require("./src/db");
var bodyParser = require('body-parser');

app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api', routes);

app.listen(3000, () => console.log('Server started in port 3000'));