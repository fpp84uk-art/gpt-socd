import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import webhooksRouter from './routes/webhooks.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ name: 'SOCD Webhooks API (facade)', status: 'ok', forwardBase: process.env.N8N_WEBHOOK_BASE || null });
});

app.use('/webhook', webhooksRouter);

// 404
app.use((req, res) => res.status(404).json({ error: 'Not Found', path: req.path }));

// Error handler
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`SOCD Webhooks server running on port ${port}`);
});
