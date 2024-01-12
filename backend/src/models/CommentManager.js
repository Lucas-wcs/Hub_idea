const AbstractManager = require("./AbstractManager");

class CommentManager extends AbstractManager {
  constructor() {
    super({ table: "Comment" });
  }

  async create({ userId, ideaId, description }) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (user_id, idea_id, description) VALUES (?,?,?)`,
      [userId, ideaId, description]
    );
    return result;
  }

  async read(id) {
    const [result] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id=?`,
      [id]
    );
    return result;
  }
  // requete jointure entre idée et commentaires

  async getByIdeaId(id) {
    const [results] = await this.database.query(
      `SELECT comment.description
      FROM comment 
      INNER JOIN idea ON comment.idea_id = idea.id WHERE idea.id=?`,
      [id]
    );
    return results;
  }

  async update({ id, description }) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET description = ? WHERE id=?`,
      [description, id]
    );
    return result;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [id]
    );
    return result;
  }
}

module.exports = CommentManager;
