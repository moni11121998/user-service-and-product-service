const Product = require('../models/product Models');

exports.createProduct = async (productData) => {
    const product = new Product(productData);
    await product.save();
    return product;
};

exports.listProducts = async () => {
    const products = await Product.find();
    return products;
};

exports.viewProduct = async (productId) => {
    const product = await Product.findById(productId);
    return product;
};

exports.deleteProduct = async (productId) => {
  const product = await Product.findByIdAndDelete(productId);
  return product;
};

exports.deleteProduct = async (productId) => {
    const product = await Product.findByIdAndDelete(productId);
    return product;
};
