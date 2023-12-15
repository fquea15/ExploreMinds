import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child } from "firebase/database";
import { firebaseConfig } from "../utils/firebase.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

//OBTENER PLATILLOS SIMILARES AL PLATILLLO SELECCIONADO Y A LA VEZ ORDENAR DE MAYOR A MENOR POR RATING
export const getSimilarDishesWithRatings = async (dishId) => {
  try {
    const dishesRef = ref(db, "dishes");
    const targetDishSnapshot = await get(child(dishesRef, dishId));

    if (!targetDishSnapshot.exists()) {
      throw new Error(`Platillo con ID ${dishId} no encontrado.`);
    }

    const targetDishData = targetDishSnapshot.val();
    const targetDishType = targetDishData.type;

    const dishesSnapshot = await get(dishesRef);
    const similarDishes = [];

    if (dishesSnapshot.exists()) {
      dishesSnapshot.forEach((dishSnapshot) => {
        const dishData = dishSnapshot.val();

        if (dishData.type === targetDishType && dishSnapshot.key !== dishId) {
          const ratings = dishData.ratings || [];
          const comments = dishData.comments || [];
          const averageRating = calculateAverageRating(ratings);
          const cappedAverageRating = Math.min(averageRating, 5);
          delete dishData.ratings;

          similarDishes.push({
            id: dishSnapshot.key,
            ...dishData,
            rating: cappedAverageRating,
            comments: comments,
          });
        }
      });
    }

    const sortedDishes = similarDishes.sort((a, b) => b.rating - a.rating);

    return sortedDishes;
  } catch (error) {
    console.error("Error al obtener platillos similares con ratings:", error);
    throw new Error("Error al obtener platillos similares con ratings");
  }
};

//CALCULAR EL PROMEDIO DE TODA LAS CALIFICACIONES DE UN PLATILLO
const calculateAverageRating = (ratings) => {
  const numericRatings = ratings.filter(
    (rating) => typeof rating.rating === "number"
  );

  if (numericRatings.length === 0) {
    return 0;
  }
  const totalRating = numericRatings.reduce(
    (sum, rating) => sum + rating.rating,
    0
  );
  const averageRating = totalRating / numericRatings.length;
  const roundedAverageRating = Number(averageRating.toFixed(2));
  return roundedAverageRating;
};
