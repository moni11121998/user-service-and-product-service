const productService = require('../services/productServices');
const { validateProduct } = require('../validation/productValidation');

exports.createProduct = async (req, res) => {
    console.log('Create product request received:', req.body);
    const { error } = validateProduct(req.body);
    if (error) {
        console.error('Product validation error:', error.details[0].message);
        return res.status(400).send(error.details[0].message);
    }

    try {
        const product = await productService.createProduct(req.body);
        console.log('Product created successfully:', product);
        res.status(201).send(product);
    } catch (err) {
        console.error('Error creating product:', err.message);
        res.status(500).send(err.message);
    }
};

exports.listProducts = async (req, res) => {
    console.log('List products request received');
    try {
        const products = await productService.listProducts();
        console.log('Products listed successfully');
        res.status(200).send(products);
    } catch (err) {
        console.error('Error listing products:', err.message);
        res.status(500).send(err.message);
    }
};

exports.viewProduct = async (req, res) => {
    console.log('View product request received for ID:', req.params.id);
    try {
        const product = await productService.viewProduct(req.params.id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        console.log('Product found:', product);
        res.status(200).send(product);
    } catch (err) {
        console.error('Error viewing product:', err.message);
        res.status(500).send(err.message);
    }
};

exports.editProduct = async (req, res) => {
    console.log('Edit product request received for ID:', req.params.id, 'with data:', req.body);
    const { error } = validateProduct(req.body);
    if (error) {
        console.error('Product validation error:', error.details[0].message);
        return res.status(400).send(error.details[0].message);
    }

    try {
        const product = await productService.editProduct(req.params.id, req.body);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        console.log('Product edited successfully:', product);
        res.status(200).send(product);
    } catch (err) {
        console.error('Error editing product:', err.message);
        res.status(500).send(err.message);
    }
};


exports.deleteProduct = async (req, res) => {
  console.log('Delete product request received for ID:', req.params.id);
  try {
      const product = await productService.deleteProduct(req.params.id);
      if (!product) {
          return res.status(404).send('Product not found');
      }
      console.log('Product deleted successfully:', product);
      res.status(200).send({ message: 'Product deleted successfully', product });
  } catch (err) {
      console.error('Error deleting product:', err.message);
      res.status(500).send(err.message);
  }
};