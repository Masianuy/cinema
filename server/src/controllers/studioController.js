const db = require('../db');

class StudioController {
  async createStudio(req, res) {
    try {
      const {title, logo, found_year, location_id, poster_studio} = req.body;
      const newStudio = await db.query(`
      INSERT INTO studio
      (title, logo, found_year, location_id, poster_studio)
      VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [title, logo, found_year, location_id, poster_studio]);
      res.send('Ok');
    } catch (error) {
      console.log(error)
    }
  }

  async getStudios(req,res) {
    try {
      const studios = await db.query(`
        SELECT s.id, s.title, s.found_year, s.logo, l.city AS city, n.title AS country 
        FROM studios s
        INNER JOIN location l ON s.location_id = l.id
        INNER JOIN nationalities n ON l.country_id = n.id;
      `)
      res.json(studios.rows)
    } catch (error) {
      console.log(error)
    }
  }

  async updateStudio(req,res) {
    try {
      const {title, logo, found_year, location_id, poster_studio} = req.body;
      const newStudio = await db.query(`
        UPDATE studios
        SET title=$1, logo=$2, found_year=$3, location_id=$4, poster_studio=$5`,
        [title, logo, found_year, location_id, poster_studio, id]);
      res.json(studio.rows[0]);  
    } catch (error) {
      console.log(error)
    }
  }

  async getStudioById(req,res) {
    try {
      const id = req.params.id;
      const studio = await db.query(`
        SELECT * FROM studio
        WHERE id=$1`, [id]);
      res.json(director.rows);
    } catch (error) {
      console.log(error)
    }
  }

  async deleteStudio(req,res) {
    try {
      const id = req.params.id;
      const studio = await db.query(`
        DELETE FROM studios WHERE id=$1 RETURNING *`, [id]);
      res.json(studio.rows[0]);
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new StudioController();