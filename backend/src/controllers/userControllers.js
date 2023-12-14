const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const users = await tables.User.readAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const user = await tables.User.read(req.params.id);
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const user = req.body;

  try {
    const insertId = await tables.User.create(user);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const {
    firstname,
    lastname,
    email,
    image_profil: imageProfil,
    password,
    is_administrator: isAdministrator,
    is_moderator: isModerator,
  } = req.body;

  const updatedUser = {
    id: req.params.id,
    firstname,
    lastname,
    email,
    imageProfil,
    password,
    isAdministrator,
    is_moderator: isModerator,
  };

  try {
    await tables.User.update(updatedUser);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.User.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
