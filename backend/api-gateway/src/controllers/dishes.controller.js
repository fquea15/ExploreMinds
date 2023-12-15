import { MENU_MANAGEMENT_SERVICE_URL } from "../config.js";

import axios from "axios";
import FormData from "form-data";
export const getDishesAll = async (req, res) => {
  try {
    const response = await axios.get(
      `${MENU_MANAGEMENT_SERVICE_URL}/api/platos`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error al obtener platos:", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const createDish = async (req, res) => {
  try {
    const { name, category, type, price, description } = req.body;
    const imageFile = req.files?.image;

    const form = new FormData();
    form.append("name", name);
    form.append("category", category);
    form.append("type", type);
    form.append("price", price);
    form.append("description", description);
    form.append("image", imageFile);

    /*const response = await axios.post(
      `${MENU_MANAGEMENT_SERVICE_URL}/api/platos`,
      form
    );*/

    res.status(201).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el platillo" });
  }
};

//ADD RATING
export const addRating = async (req, res) => {
  try {
    const data = req.body;
    const dishId = req.params.id;
    const response = await axios.post(
      `${MENU_MANAGEMENT_SERVICE_URL}/api/platos/${dishId}/rating`,
      data
    );
    res.status(201).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al agregar el rating al platillo" });
  }
};

//ADD COMMENT
export const addComment = async (req, res) => {
  try {
    const data = req.body;
    const dishId = req.params.id;
    const response = await axios.post(
      `${MENU_MANAGEMENT_SERVICE_URL}/api/platos/${dishId}/comment`,
      data
    );
    res.status(201).json(response.data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error al agregar el comentario al platillo" });
  }
};
