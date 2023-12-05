import dotenv from 'dotenv'
dotenv.config()
export const PORT = process.env['PORT_USERS_SERVICE'];
export const MONGODB_URI = process.env['MONGODB_URI'];