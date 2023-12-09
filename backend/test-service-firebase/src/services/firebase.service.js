
import firebase from "firebase";
import { firebaseConfig } from '../config/firebase.config.js'

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export const writeUserData = async() => {
  try {
    const test = {
      username: "Freddy",
      email: "freddy@empresa.com",
    }
    console.log("Estoy aqui")
    const testRef = await firebase.database().ref('/users').push(test);
    console.log("Exito", {id: testRef.key, ...test})
  } catch (error) {
    console.log(error)
  }
}


// services/firebase.service.js
/*import { initializeApp } from 'firebase';
import { firebaseConfig } from '../config/firebase.config.js';

class FirebaseService {
  constructor() {
    try {
      // Inicializar Firebase
      const app = initializeApp(firebaseConfig);

      // Verificar si ya hay una instancia de la aplicación antes de intentar acceder a 'apps.length'
      if (!app.apps || !app.apps.length) {
        throw new Error('Error de inicialización de Firebase');
      }

      this.database = getDatabase();
      this.storage = getStorage();
    } catch (error) {
      console.error('Error al inicializar Firebase:', error);
      throw error;  // Propagar el error para indicar un fallo en la inicialización
    }
  }

  async createProduct(newProduct) {
    try {
      const newProductRef = push(ref(this.database, 'products'));
      const productId = newProductRef.key;

      await set(newProductRef, newProduct);
      return { id: productId, ...newProduct };
    } catch (error) {
      throw error;
    }
  }

  async getProducts() {
    try {
      const snapshot = await once(ref(this.database, 'products'), 'value');
      const products = [];
      snapshot.forEach((childSnapshot) => {
        products.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      return products;
    } catch (error) {
      throw error;
    }
  }

  async updateProduct(productId, updatedProduct) {
    try {
      const productRef = ref(this.database, `products/${productId}`);
      await update(productRef, updatedProduct);
      return { id: productId, ...updatedProduct };
    } catch (error) {
      throw error;
    }
  }

  async deleteProduct(productId) {
    try {
      const productRef = ref(this.database, `products/${productId}`);
      await remove(productRef);
      return { message: 'Producto eliminado correctamente' };
    } catch (error) {
      throw error;
    }
  }
}

export default new FirebaseService();*/
