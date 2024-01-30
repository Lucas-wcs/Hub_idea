const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const votes = await tables.vote.readAll();
    res.json(votes);
  } catch (err) {
    next(err);
  }
};

const readByUserId = async (req, res, next) => {
  try {
    const vote = await tables.vote.read(req.params.id);
    if (vote == null) {
      res.sendStatus(404);
    } else {
      res.json(vote);
    }
  } catch (err) {
    next(err);
  }
};

const readByIdeaId = async (req, res, next) => {
  try {
    const vote = await tables.vote.readByIdeaId(req.params.id);
    if (vote == null) {
      res.sendStatus(404);
    } else {
      res.json(vote);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const vote = req.body;

  try {
    const insertId = await tables.vote.create(vote);

    res.status(200).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const { is_vote: isvote, user_id: userId, idea_id: ideaId } = req.body;

  const updatedvote = {
    is_vote: isvote,
    user_id: userId,
    idea_id: ideaId,
  };

  try {
    await tables.vote.update(updatedvote);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.vote.delete(req.body);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  readByUserId,
  readByIdeaId,
  edit,
  add,
  destroy,
};
