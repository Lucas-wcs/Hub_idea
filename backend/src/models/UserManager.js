const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "User" });
  }

  async create({
    firstname,
    lastname,
    email,
    image_profil: imageProfil = null,
    is_administrator: isAdministrator,
    is_moderator: isModerator,
  }) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, email, image_profil, is_administrator, is_moderator) VALUES (?, ?, ?, ?, ?, ?)`,
      [firstname, lastname, email, imageProfil, isAdministrator, isModerator]
    );
    return result;
  }

  async getByMail(email) {
    const [result] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE email=?`,
      [email]
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
    id,
    firstname,
    lastname,
    email,
    image_profil: imageProfil,
    password,
    is_administrator: isAdministrator,
    is_moderator: isModerator,
  }) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET firstname=?, lastname=?, email=?, image_profil=?, password=?, is_administrator=?, is_moderator=? WHERE id=?`,
      [
        firstname,
        lastname,
        email,
        imageProfil,
        password,
        isAdministrator,
        isModerator,
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

  async addModerator(id) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET is_moderator=1 WHERE id=?`,
      [id]
    );
    return result;
  }

  async deleteModerator(id) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET is_moderator=0 WHERE id=?`,
      [id]
    );
    return result;
  }

  async upload(id, imageProfil) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET image_profil=? WHERE id=?`,
      [imageProfil, id]
    );
    return result;
  }
}

module.exports = UserManager;
