const AbstractManager = require("./AbstractManager");

class IdeaManager extends AbstractManager {
  constructor() {
    super({ table: "Idea" });
  }

  async create({
    title,
    ideaDescription,
    ideaImage,
    dateLimit,
    isValidationAdministrator,
    statusId,
    ideaFinalComment,
    userId,
  }) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} ( title,
        idea_description,
        idea_image,
        date_limit,
        is_validation_administrator,
        status_id,
        idea_final_comment,
        user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title,
        ideaDescription,
        ideaImage,
        dateLimit,
        isValidationAdministrator,
        statusId,
        ideaFinalComment,
        userId,
      ]
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

  async update({
    title,
    ideaDescription,
    ideaImage,
    dateLimit,
    isValidationAdministrator,
    statusId,
    ideaFinalComment,
    userId,
    id,
  }) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET title=?, idea_description=?, idea_image=?, date_limit=?, is_validation_administrator=?, status_id=?, idea_final_comment=?, user_id = ? WHERE id=?`,
      [
        title,
        ideaDescription,
        ideaImage,
        dateLimit,
        isValidationAdministrator,
        statusId,
        ideaFinalComment,
        userId,
        id,
      ]
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

module.exports = IdeaManager;
