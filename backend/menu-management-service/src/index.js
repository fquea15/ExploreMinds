import app from './app.js'
import { connectToDB } from './utils/mongoose.js';
import { PORT } from './config.js';

async function main() {
    //await connectToDB()
    app.listen(PORT)
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
}

main()