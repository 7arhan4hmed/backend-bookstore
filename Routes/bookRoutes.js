import express from 'express';
import Book from '../models/bookModel.js'
// import Book from './book.js';

const router = express.Router();

router.post('/add', async (req, res) => {
    const { title, author, publicationYear, genre, publishedDate} = req.body;

    const newBook = new Book ({
        title,
        author,
        genre,
        publishedDate,
    });
    try {
        await newBook.save();
        res.status(201).json ({message: 'Book added successfully!'});
    }
    catch (error) {
            res.status(400).json({ message: 'Error adding book', error:error.message});

        }   
});

export default router;