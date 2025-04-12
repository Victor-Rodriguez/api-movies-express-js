import express from 'express';
import movieRoutes from './routes/movie.routes.js';

const app = express();

app.use(express.json()); // Middleware to parse JSON requests

app.use('/api/movies', movieRoutes); // Use movie routes

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
}
);