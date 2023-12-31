import express from 'express'
import morgan from 'morgan';
import cors from 'cors';
import fileUpload from 'express-fileupload';

//ROUTES
import indexRoutes from './routes/index.routes.js'
import dishesRoutes from './routes/dishes.routes.js'
//import productRoutes from './routes/product.routes.js';

const app = express()

app.use(cors());
app.use(morgan('dev'));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
}));

app.use(indexRoutes)
//app.use('/api', productRoutes)
app.use(dishesRoutes)

export default app