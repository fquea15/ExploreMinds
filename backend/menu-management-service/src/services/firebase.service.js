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

export const getDishes = async (req, res) => {
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
};

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

    // Actualizar el registro del platillo con la información de la imagen
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
    return savedDish; // Retorna la información del platillo guardado
  } catch (error) {
    console.error("Error al guardar el platillo:", error);
    throw new Error("Error al guardar el platillo");
  }
};
