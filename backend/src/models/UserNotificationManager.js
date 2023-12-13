const AbstractManager = require("./AbstractManager");

class UserNotificationManager extends AbstractManager {
  constructor() {
    super({ table: "Notificiation" });
  }

  async create({ notification_id: notificationId, user_id: userId }) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (notification_id, user_id) VALUES (?, ?)`,
      [notificationId, userId]
    );
    return result;
  }

  async read({ notification_id: notificationId, user_id: userId }) {
    const [result] = await this.database.query(
      `SELECT * FROM ${this.table} AS un JOIN User AS u ON u.id=un.user_id JOIN Notification AS n ON n.id=un.notification_id WHERE user_id=? AND notification_id=? `,
      [notificationId, userId]
    );
    return result;
  }

  async delete({ notification_id: notificationId, user_id: userId }) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} AS un JOIN User AS u ON u.id=un.user_id JOIN Notification AS n ON n.id=un.notification_id WHERE user_id=? AND notification_id=?`,
      [notificationId, userId]
    );
    return result;
  }
}

module.exports = UserNotificationManager;
