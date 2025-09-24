import mongoose from 'mongoose';
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minlength: [3, 'Title must be at least 3 characters long'],
    },
    author: {
        type: String,
        required: [true, 'Title is required'],
        minlength: [3, 'Auther name must be at least 3 characters long'],
    },
    publicationYear: {
        type: Number,
        rquired: [true, 'Publication year is required'],
        min: [1900, 'Publication year must be later tha 1900'],
        max: [new Date().getFullYear(), `Publication year cannot be in the future`],
    },
    genre: {
        type: String,
        required: [true, 'Genre date is rquired'],
    },

    publishedDate: {
        type: Date,
        required: [true, 'Published date is required'],
    },

});

// Create a model from the schema

const Book = mongoose.model('Book', bookSchema);

export default Book;