const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authmiddleware');

router.post('/create', authMiddleware, productController.createProduct);
router.get('/list', authMiddleware, productController.listProducts);
router.get('/:id', authMiddleware, productController.viewProduct);
router.put('/:id', authMiddleware, productController.editProduct);
router.delete('/:id', authMiddleware, productController.deleteProduct);

module.exports = router;
