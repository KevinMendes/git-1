import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstname: {
        type: String,
        required: 'Entrer un prénom'
    }
})