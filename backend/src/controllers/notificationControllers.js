const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const notifications = await tables.Notification.readAll();
    res.json(notifications);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const notification = await tables.Notification.read(req.params.id);
    if (notification == null) {
      res.sendStatus(404);
    } else {
      res.json(notification);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const notification = req.body;
  try {
    const insertId = await tables.Notification.create(notification);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.Notification.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  add,
  destroy,
};
