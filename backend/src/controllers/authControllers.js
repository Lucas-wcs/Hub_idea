const tables = require("../tables");

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await tables.User.getByMail(email);

    if (user[0] && user[0].password === password) {
      res.status(200).send(user);
    } else {
      res.status(400).send("Incorrecte mail ou mot de passe");
    }
  } catch (err) {
    next(err);
  }
};

const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const result = await tables.User.create(email, password);

    if (result.inertId) {
      res.status(201);
    } else {
      res.status(400);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { login, signin };
