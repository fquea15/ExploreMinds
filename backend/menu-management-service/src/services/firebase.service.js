import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, update, get, child } from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { firebaseConfig } from "../utils/firebase.js";
import fs from "fs-extra";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);

export const getAllDishesWithRatings = async () => {
  try {
    const dishesRef = ref(db, "dishes");
    const dishesSnapshot = await get(dishesRef);

    const dishes = [];

    if (dishesSnapshot.exists()) {
      dishesSnapshot.forEach((dishSnapshot) => {
        const dishData = dishSnapshot.val();
        const ratings = dishData.ratings || [];
        const comments = dishData.comments || [];
        const averageRating = calculateAverageRating(ratings);
        const cappedAverageRating = Math.min(averageRating, 5);
        delete dishData.ratings;
        dishes.push({
          id: dishSnapshot.key,
          ...dishData,
          rating: cappedAverageRating,
          comments: comments,
        });
      });
    }

    return dishes;
  } catch (error) {
    console.error("Error al obtener los platos con ratings:", error);
    throw new Error("Error al obtener los platos con ratings");
  }
};
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

/*export const getDishes = async (req, res) => {
  try {
    const dishesRef = ref(db, "dishes");
    const snapshot = await get(dishesRef);

    const dishes = [];

    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        dishes.push({
          id: childSnapshot.key,
          ...childSnapshot.val(),
        });
      });
    }

    return dishes;
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener elementos");
  }
};*/

function sanitizeFilename(filename) {
  return filename.replace(/[^a-zA-Z0-9.-]/g, "_");
}

export const saveDish = async (dishData, imageFile) => {
  try {
    const dishesRef = ref(db, "dishes");
    const newDishRef = push(dishesRef);
    const dishId = newDishRef.key;
    await update(child(dishesRef, dishId), {
      ...dishData,
    });
    const imageName = `${Date.now()}_${sanitizeFilename(imageFile.name)}`;
    const storageFileRef = storageRef(storage, `images/${imageName}`);
    const metadata = {
      contentType: imageFile.mimetype,
    };
    const file = fs.readFileSync(imageFile.tempFilePath);
    await uploadBytes(storageFileRef, file, metadata);
    fs.unlink(imageFile.tempFilePath);

    const imageUrl = await getDownloadURL(storageFileRef);
    await update(child(dishesRef, dishId), {
      image: {
        id: imageName,
        url: imageUrl,
      },
    });

    const savedDish = {
      id: dishId,
      ...dishData,
      image: {
        id: imageName,
        url: imageUrl,
      },
    };
    return savedDish;
  } catch (error) {
    console.error("Error al guardar el platillo:", error);
    throw new Error("Error al guardar el platillo");
  }
};

export const addRatingToDish = async (dishId, ratingData) => {
  try {
    const dishesRef = ref(db, "dishes");
    const dishRef = child(dishesRef, dishId);
    const ratingsSnapshot = await get(child(dishRef, "ratings"));
    const existingRatings = ratingsSnapshot.exists()
      ? ratingsSnapshot.val()
      : [];
    const updatedRatings = [...existingRatings, ratingData];
    const updateObject = {
      ratings: updatedRatings,
    };
    await update(dishRef, updateObject);
    const updatedDish = (await get(dishRef)).val();
    return updatedDish;
  } catch (error) {
    console.error("Error al agregar el rating al platillo:", error);
    throw new Error("Error al agregar el rating al platillo");
  }
};

export const addCommentToDish = async (dishId, commentData) => {
  try {
    const dishesRef = ref(db, "dishes");
    const dishRef = child(dishesRef, dishId);
    const commentsSnapshot = await get(child(dishRef, "comments"));
    const existingComments = commentsSnapshot.exists()
      ? commentsSnapshot.val()
      : [];
    const updatedComments = [...existingComments, commentData];
    const updateObject = {
      comments: updatedComments,
    };
    await update(dishRef, updateObject);
    const updatedDish = (await get(dishRef)).val();
    return updatedDish;
  } catch (error) {
    console.error("Error al agregar el comentario al platillo:", error);
    throw new Error("Error al agregar el comentario al platillo");
  }
};
