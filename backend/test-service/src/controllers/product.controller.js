import Product from '../models/product.model.js';

export const getProducts = async (req, res) => {
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
}