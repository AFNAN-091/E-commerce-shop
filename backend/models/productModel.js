import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name:{
        typeof:'string',
        required: true,
    },
    rating:{
        typeof: 'number',
        required: true,
    },
    comment:{
        typeof:'string',
        required: true,
    },
},{
    timestamps: true,
});

const productSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: {
        typeof: 'string',
        required: true,
    },
    image:{
        typeof:'string',
        required: true,
    },
    brand:{
        typeof:'string',
        required: true,
    },
    category:{
        typeof:'string',
        required: true,
    },
    description: {
        typeof:'string',
        required: true,
    },
    reviews: [reviewSchema],
    rating:{
        typeof: 'number',
        required: true,
        default: 0,
    },
    numReviews:{
        typeof: 'number',
        required: true,
        default: 0,
    },
    price:{
        typeof: 'number',
        required: true,
        default: 0,
    },
    countInStock:{
        typeof: 'number',
        required: true,
        default: 0,
    },
    },{
        timestamps: true,
    });


    const Product = mongoose.model("Productt",productSchema);

    export default Product;