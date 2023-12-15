import { Router } from 'express'
import {
    getDishRecoment
} from '../controllers/dish.controller.js'

const router = Router()

router.get('/platos/:id/rating-order', getDishRecoment)

export default router