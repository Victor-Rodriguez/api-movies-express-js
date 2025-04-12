import { movieModel } from "../models/movie.model.js";

// Function to get all movies
export const getMovies = (req, res) => {
    res.json(movieModel);
};

//Function to get a movie by ID
export const getMovieById = (req, res) => {
    const { id } = req.params;
    const movie = movieModel.find((m) => m.id === parseInt(id));
    if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
    }
    res.json(movie);
}

// Function to create a new movie
export const createMovie = (req, res) => {
    const newMovie = req.body;
    movieModel.push(newMovie);
    res.status(201).json(newMovie);
};

// Function to update a movie by ID
export const updateMovie = (req, res) => {
    const { id } = req.params;
    const movieIndex = movieModel.findIndex((m) => m.id === parseInt(id));
    if (movieIndex === -1) {
        return res.status(404).json({ message: "Movie not found" });
    }
    const updatedMovie = { ...movieModel[movieIndex], ...req.body }; // Merge existing movie with updated data
    movieModel[movieIndex] = updatedMovie; // Update the movie in the array
    res.json(updatedMovie);
};

// Function to delete a movie by ID
export const deleteMovie = (req, res) => {
    const { id } = req.params;
    const movieIndex = movieModel.findIndex((m) => m.id === parseInt(id));
    if (movieIndex === -1) {
        return res.status(404).json({ message: "Movie not found" });
    }
    movieModel.splice(movieIndex, 1);
    res.status(204).send();
};