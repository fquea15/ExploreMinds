import { getDishes, saveDish } from "../services/firebase.service.js";

export const getDishesAll = async (req, res) => {
  try {
    const dishes = await getDishes();
    res.json(dishes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener elementos" });
  }
};

export const createDish = async (req, res) => {
  try {
    const { name, category, type, price, description } = req.body;
    const imageFile = req.files?.image;

    if (!imageFile) {
      throw new Error("No se proporcionó un archivo de imagen.");
    }
    const dishData = {
      name,
      category,
      type,
      price,
      description,
    };
    const dish = await saveDish(dishData, imageFile);
    res.status(201).json(dish);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el platillo" });
  }
};

/*import Dish from '../models/dish.model.js';
import { uploadImage, deleteImage } from '../utils/cloudinary.js';
import fs from 'fs-extra';

export const getDishes = async (req, res) => {
    try {
        const dishes = await Dish.find()
        res.json(dishes)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createDishes = async (req, res) => {
    try {
        const { name, category, type, price, description } = req.body;
        const dish = new Dish({
            name: name,
            category: category,
            type: type,
            price: price,
            description: description,
            ratings: []
        });

        if (req.files?.image) {
            try {
                const result = await uploadImage(req.files.image.tempFilePath);
                dish.image = {
                    publicId: result.public_id,
                    url: result.secure_url
                };
                console.log(result)

                // Elimina el archivo temporal después de subirlo
                await fs.unlink(req.files.image.tempFilePath);
            } catch (uploadError) {
                return res.status(500).json({ message: "Error al subir la imagen", error: uploadError.message });
            }
        } else {
            dish.image = {
                public_id: "",
                secure_url: ""
            };
        }

        // Guarda el plato en la base de datos
        await dish.save();
        res.json(dish);
    } catch (error) {
        return res.status(500).json({ message: "Error al crear el plato", error: error.message });
    }
};




/*export const getProducts = async (req, res) => {
    //res.send('Getting products')}
    try {
        const products = await Product.find()
        res.json(products)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createProducts = async (req, res) => {
    try {
        //res.send('creating products')
        //console.log(req.body
        const { name, description, price } = req.body
        //console.log(name, description, price)
        //console.log(req.files)

        const product = new Product({
            name,
            description,
            price
        })
        await product.save()
        res.json(product)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getProduct = async (req, res) => {
    try {
        console.log(req.params.id)
        const product = await Product.findById(req.params.id)
        if (!product) return res.status(404).json({ msg: 'Product does not exists' })
        return res.json(product)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateProducts = async (req, res) => {
    try {
        const { id } = req.params;
        //console.log(id)
        //console.log(req.body)
        const productUpdated = await Product.findByIdAndUpdate(id, req.body, {
            new: true
        })
        return res.json(productUpdated)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deleteProducts = async (req, res) => {
    try {
        //res.send('deleting products')
        console.log(req.params.id)
        const product = await Product.findByIdAndDelete(req.params.id)
        if (!product) return res.status(404).json({ msg: 'Product does not exist' })
        return res.json(product)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}*/
