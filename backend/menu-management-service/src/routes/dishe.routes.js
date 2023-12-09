import { Router } from 'express'
import {
    getDishesAll,
    createDish
} from '../controllers/dish.controller.js'

const router = Router()

router.get('/platos', getDishesAll)
router.post('/platos', createDish)

/*router.get('/products/:id', getProduct)

router.post('/products', createProducts)

router.put('/products/:id', updateProducts)

router.delete('/products/:id', deleteProducts)*/

export default router