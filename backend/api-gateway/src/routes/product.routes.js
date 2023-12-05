import { Router } from 'express'
import {
    getProducts,
    createProducts,
    updateProducts,
    deleteProducts,
    getProduct
} from '../controllers/product.controller.js'

const router = Router()

router.get('/products', getProducts)

router.get('/products/:id', getProduct)

router.post('/products', createProducts)

router.put('/products/:id', updateProducts)

router.delete('/products/:id', deleteProducts)

export default router