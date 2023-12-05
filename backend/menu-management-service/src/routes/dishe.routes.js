import { Router } from 'express'
import {
    getDishes,
    createDishes
} from '../controllers/dish.controller.js'

const router = Router()

router.get('/platos', getDishes)
router.post('/platos', createDishes)

/*router.get('/products/:id', getProduct)

router.post('/products', createProducts)

router.put('/products/:id', updateProducts)

router.delete('/products/:id', deleteProducts)*/

export default router