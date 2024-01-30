const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "vote" });
  }

  async create({ user_id: userId, idea_id: ideaId, is_vote: isVote }) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (user_id, idea_id, is_vote) VALUES (?, ?, ?)`,
      [userId, ideaId, isVote]
    );
    return result;
  }

  async readByUserId(userId) {
    const [result] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE user_id=?`,
      [userId]
    );
    return result;
  }

  async readByIdeaId(ideaId) {
    const [result] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE idea_id=?`,
      [ideaId]
    );
    return result;
  }

  async update({ user_id: userId, idea_id: ideaId, is_vote: isVote }) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET is_vote = ? WHERE user_id=? AND idea_id=?`,
      [isVote, userId, ideaId]
    );
    return result;
  }

  async delete({ user_id: userId, idea_id: ideaId }) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE user_id=? AND idea_id=?`,
      [userId, ideaId]
    );
    return result;
  }
}

module.exports = UserManager;
