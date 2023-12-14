const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const votes = await tables.Vote.readAll();
    res.json(votes);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const vote = await tables.Vote.read(req.params.id);
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
    const insertId = await tables.Vote.create(vote);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const { is_vote: isVote, user_id: userId, idea_id: ideaId } = req.body;

  const updatedVote = {
    is_vote: isVote,
    user_id: userId,
    idea_id: ideaId,
  };

  try {
    await tables.Vote.update(updatedVote);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.Vote.delete(req.body);
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
