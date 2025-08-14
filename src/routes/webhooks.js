import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

const forwardToN8N = async (path, method, body = null) => {
  const base = process.env.N8N_WEBHOOK_BASE;
  if (!base) throw new Error('N8N_WEBHOOK_BASE não definido');

  const url = `${base}${path}`;
  const options = {
    method,
    headers: { 'Content-Type': 'application/json' }
  };
  if (body) options.body = JSON.stringify(body);

  const response = await fetch(url, options);
  return response.json().catch(() => ({}));
};

// Health check
router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Webhooks
router.post('/catalog/product', async (req, res) => {
  const result = await forwardToN8N('/catalog/product', 'POST', req.body);
  res.json(result);
});

router.post('/orders/get', async (req, res) => {
  const result = await forwardToN8N('/orders/get', 'POST', req.body);
  res.json(result);
});

router.post('/orders/list', async (req, res) => {
  const result = await forwardToN8N('/orders/list', 'POST', req.body);
  res.json(result);
});

router.post('/inventory/sku', async (req, res) => {
  const result = await forwardToN8N('/inventory/sku', 'POST', req.body);
  res.json(result);
});

router.post('/pricing/sku', async (req, res) => {
  const result = await forwardToN8N('/pricing/sku', 'POST', req.body);
  res.json(result);
});

export default router;
