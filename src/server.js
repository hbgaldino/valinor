import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost/bus-schedules', {useNewUrlParser: true})
  .then(() => console.log("Sucessfuly connected to mongodb"));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routes);
app.listen(3000, () => console.log('Server started in port 3000'));