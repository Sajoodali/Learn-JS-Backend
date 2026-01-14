import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db.js';


dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.post('/data', express.json(), (req, res) => {
  const receivedData = req.body;
    res.status(201).json({ message: 'Data received', data: receivedData });
});

app.use((req, res) => {
  res.status(404).send('Route not found');  
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

