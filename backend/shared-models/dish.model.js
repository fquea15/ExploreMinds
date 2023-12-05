import mongoose from 'mongoose';

const dishSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        required: false,
        trim: true,
    },
    image: {
        publicId: {
            type: String,
            required: false,
        },
        url: {
            type: String,
            required: false,
        },
    },
    ratings: [
        {
            token: String,
            rating: Number,
            comment: String,
            userName: String,
        },
    ],
});

export default mongoose.model('Dish', dishSchema);
