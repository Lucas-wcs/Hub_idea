const AbstractManager = require("./AbstractManager");

class UserNotificationManager extends AbstractManager {
  constructor() {
    super({ table: "User_notification" });
  }

  async create({ notification_id: notificationId, user_id: userId }) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (notification_id, user_id) VALUES (?, ?)`,
      [notificationId, userId]
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

  async readByNotificationId(notificationId) {
    const [result] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE notification_id=?`,
      [notificationId]
    );
    return result;
  }

  async delete({ notification_id: notificationId, user_id: userId }) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE user_id=? AND notification_id=?`,
      [userId, notificationId]
    );
    return result;
  }
}

module.exports = UserNotificationManager;
