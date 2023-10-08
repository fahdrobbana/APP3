import express from 'express';
import mongoose from 'mongoose';
import gameRoutes from './routes/Game.js';

const port = process.env.PORT || 9090;
const app = express();
const databaseName = "APP3";

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

mongoose
  .connect(`mongodb://localhost:27017/${databaseName}`, {

  })
  .then(() => {
    console.log(`Connected to ${databaseName}`);
  })
  .catch((err) => {
    console.error('Connection error:', err);
  });

app.use(express.json()); 
app.use('/game', gameRoutes);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
