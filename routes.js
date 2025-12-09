import express from 'express';
import { createBook, getBooks } from './controllers/BooksController.js';
import { createAuthor, getAuthors } from './controllers/AuthorsController.js';
import { createGenre, getGenres } from './controllers/GenresController.js';

const router = express.Router();

router.post('/books', createBook);
router.get('/books', getBooks);

router.post('/authors', createAuthor);
router.get('/authors', getAuthors);

router.post('/genres', createGenre);
router.get('/genres', getGenres);

export default router;
