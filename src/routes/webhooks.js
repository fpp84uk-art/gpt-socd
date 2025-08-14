import express from 'express';

const router = express.Router();

// Webhook health check
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Webhook ativo' });
});

// Webhook - catálogo de produto
router.post('/catalog/product', (req, res) => {
  console.log('📦 Produto recebido:', req.body);
  res.status(200).json({ received: true });
});

// Webhook - obter pedido
router.post('/orders/get', (req, res) => {
  console.log('📜 Pedido específico recebido:', req.body);
  res.status(200).json({ received: true });
});

// Webhook - listar pedidos
router.post('/orders/list', (req, res) => {
  console.log('📜 Lista de pedidos recebida:', req.body);
  res.status(200).json({ received: true });
});

// Webhook - inventário SKU
router.post('/inventory/sku', (req, res) => {
  console.log('📦 Estoque SKU recebido:', req.body);
  res.status(200).json({ received: true });
});

// Webhook - preço SKU
router.post('/pricing/sku', (req, res) => {
  console.log('💰 Preço SKU recebido:', req.body);
  res.status(200).json({ received: true });
});

export default router;
