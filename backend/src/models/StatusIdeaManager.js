const AbstractManager = require("./AbstractManager");

class StatusIdeaManager extends AbstractManager {
  constructor() {
    super({ table: "status_idea" });
  }

  async read(id) {
    const [result] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result;
  }
}

module.exports = StatusIdeaManager;
