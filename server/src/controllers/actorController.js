const db = require('../db');

class ActorController {
  async createActor(req, res) {
    try {
      const {full_name, birth_year, death_year, national_id, poster_actor} = req.body;
      const newActor = await db.query(`
        INSERT INTO actors
        (full_name, birth_year, death_year, poster_actor, national_id)
        VALUES ($1, $2, $3, $4, $5) RETURNING *`, 
        [full_name, birth_year, death_year, national_id, poster_actor]);
      res.json(newActor.rows[0]);
    } catch (error) {
      console.log(error)
    }
  }

  async getActors(req, res) {
    try {
      const actors = await db.query(`
        SELECT a.id, a.full_name, a.birth_year, a.death_year, a.poster_actor, n.title AS nationalities
        FROM actors a
        INNER JOIN nationalities n ON a.national_id = n.id;
      `)
      res.json(actors.rows);
    } catch (error) {
      console.log(error)
    }
  }

  async getActorById(req, res) {
    const id = req.params.id;
    const actor = await db.query(`
      SELECT * FROM actors
      WHERE id=$1;`, [id])
    res.json(actor.rows[0]);
  } catch (error) {
    console.log(error)
  }

  async updateActor(req, res) {
    try {
      const {full_name, birth_year, death_year, national_id, poster_actor, id} = req.body;
      const updateActor = await db.query(`
        UPDATE actors
        SET full_name=$1, birth_year=$2, death_year=$3, poster_actor=$4, national_id=$5
        WHERE id=$6 RETURNING *`, 
      [full_name, birth_year, death_year, national_id, poster_actor, id]);
      req.json(updateActor.rows[0]);
    } catch (error) {
      console.log(error)
    }
  }

  async deleteActor(req, res) {
    try {
      const id = req.param.id;
      const actor = await db.query(`
      DELETE FROM actors WHERE id=$1 RETURNING *`, [id])
      res.json(actor.rows[0]);
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new ActorController();