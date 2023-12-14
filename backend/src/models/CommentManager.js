const AbstractManager = require("./AbstractManager");

class CommentManager extends AbstractManager {
  constructor() {
    super({ table: "Comment" });
  }

  async create({ user_id: userId, idea_id: ideaId, description }) {
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
