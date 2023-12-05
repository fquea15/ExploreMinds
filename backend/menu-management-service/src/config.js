import dotenv from 'dotenv'
dotenv.config()
export const PORT = process.env['PORT_TEST_SERVICE'];
export const MONGODB_URI = process.env['MONGODB_URI'];

export const CLOUDINARY_NAME = process.env['CLOUDINARY_NAME'];
export const CLOUDINARY_API_KEY = process.env['CLOUDINARY_API_KEY'];
export const CLOUDINARY_API_SECRET = process.env['CLOUDINARY_API_SECRET'];