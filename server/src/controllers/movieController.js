const db = require('../db');

class MovieController {
  async createMovie(req, res) {
    try {
      const {title, poster, release_year, genre_id, studio_id} = req.body;
      const newMovie = await db.query(`
        INSERT INTO movies
        (title, poster, release_year, genre_id, studio_id)
        VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [title, poster, release_year, genre_id, studio_id]);
      res.json(newMovie.rows[0]);
    } catch (error) {
      console.log(error)
    }
  }

  async getMovies(req, res) {
    try {
      const movies = await db.query(`
        SELECT m.id AS id, m.title AS title, m.poster, m.release_year, g.title AS genre, 
        s.title AS studio, s.logo AS logo
        FROM movies m
        INNER JOIN genres g ON m.genre_id = g.id
        INNER JOIN studios s ON m.studio_id = s.id;
      `)
      res.json(movies.rows);
    } catch (error) {
      console.log(error)
    }
  }

  async getOneMovie(req, res) {
    try {
      const id = req.params.id;
      const movie = await db.query(
        `SELECT * FROM movies
        WHERE id=$1;`, [id])
      res.json(movie.rows[0]);
    } catch (error) {
      console.log(error)
    }
  }

  async updateMovie(req, res) {
    try {
      const {title, poster, release_year, genre_id, studio_id} = req.body;
      const updateMovie = await db.query(`
        UPDATE movies 
        SET title = $1, poster = $2, release_year = $3, genre_id = $4, studio_id = $5
        WHERE id = $6`,
        [title, poster, release_year, genre_id, studio_id, id]);
      res.json(updateMovie.rows[0]);
    } catch (error) {
      console.log(error)
    }
  }

  async deleteMovie(req, res) {
    try {
      const id = req.params.id;
      const delMovie = await db.query(`
      DELETE FROM movies WHERE id=$1 RETURNING *`, [id])
      res.json(delMovie.rows[0]);
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new MovieController();