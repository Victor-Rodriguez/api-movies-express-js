import express from 'express';
import { getMovies, getMovieById, createMovie, updateMovie, deleteMovie } from '../controllers/movie.controller.js';

const router = express.Router();

// Define routes for movies


router.get('/', getMovies);
router.get('/:id', getMovieById);
router.post('/', createMovie);
router.patch('/:id', updateMovie);
router.delete('/:id', deleteMovie);

export default router;