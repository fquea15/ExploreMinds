import firebase from "firebase";
import { firebaseConfig } from "../utils/firebase.js";

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
console.log(firebase)
export const getDishes = async (req, res) => {
  try {
    const snapshot = await database.ref("/items").once("value");
    const items = [];
    snapshot.forEach((childSnapshot) => {
      items.push({
        id: childSnapshot.key,
        ...childSnapshot.val(),
      });
    });
    return items
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener elementos" });
  }
};

/*
export const addItem = async (newItem) => {
  const newItemRef = await database.ref('/items').push(newItem);
  return { id: newItemRef.key, ...newItem };
};*/
