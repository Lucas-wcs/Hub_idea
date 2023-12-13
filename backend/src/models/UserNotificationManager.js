const AbstractManager = require("./AbstractManager");

class UserNotificationManager extends AbstractManager {
  constructor() {
    super({ table: "Notificiation" });
  }

  async create({ notificationId, userId }) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (notification_id, user_id) VALUES (?, ?)`,
      [notificationId, userId]
    );
    return result;
  }

  async read(id) {
    const [result] = await this.database.query(
      `SELECT * FROM ${this.table} AS un JOIN User AS u ON u.id=un.user_id JOIN Notification AS n ON n.id=un.notification_id WHERE user_id=?`,
      [id]
    );
    return result;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE user_id=?`,
      [id]
    );
    return result;
  }
}

module.exports = UserNotificationManager;
