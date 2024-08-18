import mongoose from "mongoose";

// Define the schema for the ShortUrls model
const shortUrlSchema = mongoose.Schema({
    originalUrl: {
        type: String,
        required: true,
    },
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    shortUrl: {
        type: String,
        required: true,
    },
    userId: {
        type:mongoose.Schema.Types.ObjectId
    },
    clicksCount: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create a Mongoose model named 'ShortUrls' based on the shortUrlSchema
const ShortUrls = mongoose.model("ShortUrls", shortUrlSchema);

export default ShortUrls;

