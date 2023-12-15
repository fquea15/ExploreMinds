import { Router } from "express";
import {
  getDishesAll,
  addComment,
  addRating,
  createDish,
} from "../controllers/dishes.controller.js";
const router = Router();
router.get("/platos", getDishesAll);
router.post("/platos", createDish);
router.post("/platos/:id/rating", addRating);
router.post("/platos/:id/comment", addComment);

export default router;
