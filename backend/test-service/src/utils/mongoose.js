import mongoose from 'mongoose'
import { MONGODB_URI } from '../config.js'

export async function connectToDB() {
    try {
        await mongoose.connect(MONGODB_URI, {
            //useNewUrlParser: true,
            //useUnifiedTopology: true,
            //useFindAndModify: false,
            //useCreateIndex: true
        })
        console.log('MongoDB connected')

    } catch (error) {
        console.log(error)
    }
}