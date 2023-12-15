import dotenv from 'dotenv'
dotenv.config()
export const PORT = process.env['PORT_GATEWAY'];
export const MENU_MANAGEMENT_SERVICE_URL = process.env['MENU_MANAGEMENT_SERVICE_URL']