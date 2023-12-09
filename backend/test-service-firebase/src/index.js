import app from './app.js'
import { PORT } from './config/config.js'
import { writeUserData } from './services/firebase.service.js';

async function main() {
    try {
      await writeUserData();
      app.listen(PORT);
      console.log(`Servidor escuchando en http://localhost:${PORT}`);
    } catch (error) {
      console.error('Error en la función main:', error);
    }
  }
  
main()