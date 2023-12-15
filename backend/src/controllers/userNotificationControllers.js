const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const users = await tables.User_notification.readAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

const readByUserId = async (req, res, next) => {
  try {
    const user = await tables.User_notification.read(req.params.id);
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
};

const readByNotificationId = async (req, res, next) => {
  try {
    const user = await tables.User_notification.read(req.params.id);
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
    const insertId = await tables.User_notification.create(user);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.User_notification.delete(req.body);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  readByUserId,
  readByNotificationId,
  add,
  destroy,
};
