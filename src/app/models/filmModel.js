import mongoose from "mongoose";

const filmModel = new mongoose.Schema({
    deTitle: {
        type: String
    },
    deSinopse: {
        type: String
    },
    dtRelease: {
        type: Date, 
        default: Date.now
    },
    deDiretors: {
        type: Array
    },
    deCast: {
        type: Array
    },
    deGenre: {
        type: String,
    },
    isForeigner: {
        type: Boolean
    }
});

export default filmModel;