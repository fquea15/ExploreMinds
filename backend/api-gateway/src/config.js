import dotenv from 'dotenv'
dotenv.config()
export const PORT = process.env['PORT_GATEWAY'];
export const TEST_SERVICE_URL = process.env['TEST_SERVICE_URL']