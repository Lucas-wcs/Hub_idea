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

const readByToken = async (req, res, next) => {
  try {
    const user = await tables.User.read(req.auth.userId);
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user[0]);
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
  try {
    if (req.body.password === "") {
      const user = await tables.User.getByMail(req.body.email);
      req.body.password = user[0]?.password;
    }

    await tables.User.update(req.body);
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

const addModerator = async (req, res, next) => {
  try {
    await tables.User.addModerator(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const deleteModerator = async (req, res, next) => {
  try {
    await tables.User.deleteModerator(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  readByToken,
  edit,
  add,
  destroy,
  addModerator,
  deleteModerator,
};
