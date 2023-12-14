const AbstractManager = require("./AbstractManager");

class NotificationManager extends AbstractManager {
  constructor() {
    super({ table: "Notification" });
  }

  async create({ content }) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (content) VALUES (?)`,
      [content]
    );
    return result;
  }

  async read(id) {
    const [result] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id=? `,
      [id]
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

module.exports = NotificationManager;
