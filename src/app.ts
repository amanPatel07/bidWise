import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes/index';

const app = express();
app.use(express.json());
dotenv.config({ path: './.env' });
const port = process.env.PORT;
const mongodb_uri = process.env.MONGODB_URI || '';

mongoose.connect(
  mongodb_uri,
).then(() => {
  console.log('Database Connected Successfully');
}).catch((error) => {
  console.log('Unable to connect database !!', error);
});

app.use(routes);


app.listen(port, () => {
  console.log('server listening');
});