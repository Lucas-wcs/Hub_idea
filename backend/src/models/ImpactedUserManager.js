const AbstractManager = require("./AbstractManager");

class ImpactedUserManager extends AbstractManager {
  constructor() {
    super({ table: "Impacted_user" });
  }

  async create({ user_id: userId, idea_id: ideaId }) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (user_id, idea_id) VALUES (?, ?)`,
      [userId, ideaId]
    );
    return result;
  }

  async read({ user_id: userId, idea_id: ideaId }) {
    const [result] = await this.database.query(
      `SELECT * FROM ${this.table} AS iu JOIN User AS u ON u.id=iu.user_id JOIN Idea AS i ON i.id=iu.idea_id WHERE user_id=? AND idea_id=?`,
      [userId, ideaId]
    );
    return result;
  }

  async delete({ user_id: userId, idea_id: ideaId }) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} AS iu JOIN User AS u ON u.id=iu.user_id JOIN Idea AS i ON i.id=iu.idea_id WHERE user_id=? AND idea_id= ?`,
      [userId, ideaId]
    );
    return result;
  }
}
module.exports = ImpactedUserManager;
