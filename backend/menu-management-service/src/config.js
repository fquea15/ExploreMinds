import dotenv from 'dotenv'
dotenv.config()
export const PORT = process.env['PORT'];
export const MONGODB_URI = process.env['MONGODB_URI'];

//CLOUDINARY CLOUD IMAGE
export const CLOUDINARY_NAME = process.env['CLOUDINARY_NAME'];
export const CLOUDINARY_API_KEY = process.env['CLOUDINARY_API_KEY'];
export const CLOUDINARY_API_SECRET = process.env['CLOUDINARY_API_SECRET'];

//FIREBASE ADMIN
export const FIREBASE_API_KEY = process.env["FIREBASE_API_KEY"]
export const FIREBASE_AUTH_DOMAIN = process.env["FIREBASE_AUTH_DOMAIN"]
export const FIREBASE_DATABASE_URL = process.env["FIREBASE_DATABASE_URL"]
export const FIREBASE_PROJECT_ID = process.env["FIREBASE_PROJECT_ID"]
export const FIREBASE_STORAGE_BUCKET = process.env["FIREBASE_STORAGE_BUCKET"]
export const FIREBASE_MESSAGING_SENDER_ID = process.env["FIREBASE_MESSAGING_SENDER_ID"]
export const FIREBASE_APP_ID = process.env["FIREBASE_APP_ID"]
export const FIREBASE_MEASUREMENT_ID = process.env["FIREBASE_MEASUREMENT_ID"]