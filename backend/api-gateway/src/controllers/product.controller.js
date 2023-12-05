import { TEST_SERVICE_URL } from '../config.js'

import axios from 'axios';

export const getProducts = async (req, res) => {
    try {
        console.log("Obtener Todos los Productos");

        // Realiza una solicitud GET al servicio test-service
        const response = await axios.get(`${TEST_SERVICE_URL}/api/products`);
        // Envía la respuesta al cliente
        res.json(response.data);
    } catch (error) {
        console.error("Error al obtener productos:", error.message);
        return res.status(500).json({ message: error.message });
    }
};


export const createProducts = async (req, res) => {
    try {
        console.log("Crear Producto")
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getProduct = async (req, res) => {
    try {
        console.log("obtener un producto")
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateProducts = async (req, res) => {
    try {
        console.log("Actualizar Producto")
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deleteProducts = async (req, res) => {
    try {
        console.log("Eliminar Producto")
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}