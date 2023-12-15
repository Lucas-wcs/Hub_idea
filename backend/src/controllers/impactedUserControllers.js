const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const impactedUsers = await tables.Impacted_user.readAll();
    res.json(impactedUsers);
  } catch (err) {
    next(err);
  }
};

const readByUserId = async (req, res, next) => {
  try {
    const impactedUser = await tables.Impacted_user.read(req.params.id);
    if (impactedUser == null) {
      res.sendStatus(404);
    } else {
      res.json(impactedUser);
    }
  } catch (err) {
    next(err);
  }
};

const readByIdeaId = async (req, res, next) => {
  try {
    const impactedUser = await tables.Impacted_user.read(req.params.id);
    if (impactedUser == null) {
      res.sendStatus(404);
    } else {
      res.json(impactedUser);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const impactedUser = req.body;

  try {
    const insertId = await tables.Impacted_user.create(impactedUser);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.Impacted_user.delete(req.body);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  readByUserId,
  readByIdeaId,
  add,
  destroy,
};
