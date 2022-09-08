const db = require('../db');

class DirectorController {
  async createDirector(req, res) {
    try {
      const {full_name, birth_year, death_year, national_id, poster_director} = req.body;
      const newDirector = await db.query(`
        INSERT INTO directors
        (full_name, birth_year, death_year, national_id, poster_director)
        VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [full_name, birth_year, death_year, national_id, poster_director]);
      res.json(newDirector.rows[0]);
    } catch (error) {
      console.log(error)
    }
  }

  async getDirectors(req, res) {
    try {
      const directors = await db.query(`
        SELECT d.id, d.full_name, d.birth_year, d.death_year, d.poster_director, n.title AS nationalities
        FROM directors d
        INNER JOIN nationalities n ON d.national_id = n.id;`);
      res.json(directors.rows)
    } catch (error) {
      console.log(error)
    }
  }

  async getDirectorById(req, res) {
    try {
      const id = req.params.id;
      const director = await db.query(`
      SELECT * FROM directors
      WHERE id=$1`, [id]);
      res.json(director.rows[0]);
    } catch (error) {
      console.log(error)
    }
  }

  async updateDirector(req, res) {
    try { 
      const {full_name, birth_year, death_year, national_id, poster_director} = req.body;
      const director = await db.query(`
        UPDATE directors
        SET full_name=$1, birth_year=$2, death_year=$3, national_id=$4, poster_director=$5
        WHERE id=$6`,
        [full_name, birth_year, death_year, national_id, poster_director, id]);
      res.json(director.rows[0]);
    } catch (error) {
      console.log(error)
    }
  }

  async deleteDirector(req, res) {
    try {
      const id = req.params.id;
      const director = await db.query(`
      DELETE FROM directors WHERE id=$1 RETURNING *`, [id]);
      res.json(director.rows[0]);
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new DirectorController();