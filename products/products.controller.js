import Product from './products.model';

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create({
      ...req.body,
    });
    res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: `Product ${req.params.id} not found` });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const { resturant, category } = req.query;
    const products = await Product.find({ resturantId: resturant, category });
    if (!products) {
      return res.status(404).json({ message: `Products not found` });
    }
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    if (!product) {
      return res.status(404).json({ message: `Product ${req.params.id} not found` });
    }
    return res.status(200).json({ message: `Product ${req.params.id} updated` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: `Product ${req.params.id} not found` });
    }
    return res.status(200).json({ message: `Product ${req.params.id} deleted` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
