const AbstractManager = require("./AbstractManager");

class ImpactedUserManager extends AbstractManager {
  constructor() {
    super({ table: "Impacted_user" });
  }

  async create(userId, ideaId) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (user_id, idea_id) VALUES (?, ?)`,
      [userId, ideaId]
    );
    return result;
  }

  async readByUserId(userId) {
    const [result] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE user_id=?`,
      [userId]
      // rajouter inner join avec user pour la photo voir commentManager
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

  async delete({ user_id: userId, idea_id: ideaId }) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE user_id=? AND idea_id= ?`,
      [userId, ideaId]
    );
    return result;
  }
}
module.exports = ImpactedUserManager;
