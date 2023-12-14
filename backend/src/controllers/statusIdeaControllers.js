const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const statuses = await tables.Status_idea.readAll();
    res.json(statuses);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const status = await tables.Status_idea.read(req.params.id);
    if (status == null) {
      res.sendStatus(404);
    } else {
      res.json(status);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
};
