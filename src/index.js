import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import webhooksRouter from './routes/webhooks.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/webhook', webhooksRouter);

app.get('/', (req, res) => {
  res.send({ status: 'Servidor rodando 🚀' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
