var mongoose = require('mongoose');

var endpointMongoDB = 'mongodb://localhost/bus-schedules';

mongoose.connect(endpointMongoDB, {useNewUrlParser: true})
      .then(() => console.log("connected to mongo"));