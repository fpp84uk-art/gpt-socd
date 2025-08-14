import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import webhooksRouter from './routes/webhooks.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/webhook', webhooksRouter);

app.listen(port, () => {
  console.log(`SOCD Webhooks server running on port ${port}`);
});
