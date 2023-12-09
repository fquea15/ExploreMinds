import firebaseService from '../services/firebase.service.js';

export const getProducts = async (req, res) => {
  try {
    const products = await firebaseService.getProducts();
    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const imageFile = req.files?.image;

    let imageUrl = null;

    if (imageFile) {
      // Subir la imagen a Firebase Storage y obtener la URL
      imageUrl = await firebaseService.uploadImageToStorage(imageFile, 'temp-id');
    }

    // Crear el producto en la base de datos
    const product = await firebaseService.createProduct({ name, description, price, image: imageUrl });

    // Actualizar el ID y la URL de la imagen después de crear el producto
    const updatedProduct = await firebaseService.updateProduct(product.id, {
      image: await firebaseService.uploadImageToStorage(imageFile, product.id)
    });

    res.json(updatedProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await firebaseService.getProduct(productId);
    res.json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, description, price } = req.body;
    const imageFile = req.files?.image;

    let imageUrl = null;

    if (imageFile) {
      // Subir la nueva imagen a Firebase Storage y obtener la URL
      imageUrl = await firebaseService.uploadImageToStorage(imageFile, productId);
    }

    // Actualizar el producto en la base de datos
    const updatedProduct = await firebaseService.updateProduct(productId, { name, description, price, image: imageUrl });

    res.json(updatedProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await firebaseService.deleteProduct(productId);
    res.json(deletedProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
