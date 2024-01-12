const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const comments = await tables.Comment.readAll();
    res.json(comments);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const comment = await tables.Comment.read(req.params.id);
    if (comment == null) {
      res.sendStatus(404);
    } else {
      res.json(comment);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const comment = req.body;

  try {
    const insertId = await tables.Comment.create(comment);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// fonction getByIdeaId avec pour res -> comments

const getByIdeaId = async (req, res, next) => {
  try {
    const comments = await tables.Comment.getByIdeaId(req.params.ideaId);
    res.json(comments);
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const { description } = req.body;

  const updatedComment = {
    id: req.params.id,
    description,
  };

  try {
    await tables.Comment.update(updatedComment);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.Comment.delete(req.params.id);
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
  getByIdeaId,
};
