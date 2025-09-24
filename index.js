import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './Routes/bookRoutes.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.get('/', (req, res)=> res.send('Welcome to MERN Backend'));

app.use('/books', router);

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    app.listen(process.env.PORT, () => console.log('Server is running on port 5555'));
    
})
.catch(err => console.log(err));
