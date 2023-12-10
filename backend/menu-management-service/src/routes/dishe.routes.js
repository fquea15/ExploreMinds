import { Router } from 'express'
import {
    getDishesAll,
    createDish,
    addRating,
    addComment,
} from '../controllers/dish.controller.js'

const router = Router()

router.get('/platos', getDishesAll)
router.post('/platos', createDish)
router.post('/platos/:id/rating', addRating);
router.post('/platos/:id/comment', addComment);

/*router.get('/products/:id', getProduct)

router.post('/products', createProducts)

router.put('/products/:id', updateProducts)

router.delete('/products/:id', deleteProducts)*/

export default router