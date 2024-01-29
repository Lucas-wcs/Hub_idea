const AbstractManager = require("./AbstractManager");

class ImpactedUserManager extends AbstractManager {
  constructor() {
    super({ table: "Impacted_user" });
  }

  async create(ideaId, usersAssociated) {
    let sqlString = `INSERT INTO ${this.table} (user_id, idea_id) VALUES `;
    const arrayDependencies = [];

    usersAssociated.forEach((userId, index) => {
      if (index === 0) {
        sqlString += " (?,?)";
      } else {
        sqlString += ", (?,?)";
      }
      arrayDependencies.push(userId, ideaId);
    });

    const [result] = await this.database.query(sqlString, arrayDependencies);
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
      `SELECT user.id as userId, user.image_profil, user.firstname, user.lastname FROM ${this.table} JOIN user ON impacted_user.user_id = user.id JOIN idea ON impacted_user.idea_id = idea.id WHERE idea.id=? `,
      [ideaId]
    );

    return result;
  }

  async delete(ideaId, ideasIds) {
    let sqlString = `DELETE FROM ${this.table} WHERE `;
    const arrayDependencies = [];

    ideasIds.forEach((userId, index) => {
      if (index === 0) {
        sqlString += " (user_id=? AND idea_id= ?)";
      } else {
        sqlString += " OR (user_id=? AND idea_id= ?)";
      }
      arrayDependencies.push(userId, ideaId);
    });

    const [result] = await this.database.query(sqlString, arrayDependencies);
    return result;
  }
}
module.exports = ImpactedUserManager;
