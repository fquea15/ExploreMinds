import { getSimilarDishesWithRatings } from "../services/firebase.service.js";

//GET ALL DISHES
export const getDishRecoment = async (req, res) => {
  try {
    const dishId = req.params.id;
    const dishes = await getSimilarDishesWithRatings(dishId);
    res.json(dishes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener elementos" });
  }
};
