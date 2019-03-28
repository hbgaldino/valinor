var express = require('express');
var routes = require("./src/routes");

app = express()

app.use('/api', routes);

app.listen(3000, () => console.log('Server started in port 3000'));