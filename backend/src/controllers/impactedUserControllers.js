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
    const impactedUser = await tables.Impacted_user.readByUserId(req.params.id);
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
    const impactedUser = await tables.Impacted_user.readByIdeaId(req.params.id);
    if (impactedUser == null) {
      res.sendStatus(404);
    } else {
      res.status(200);
      res.json(impactedUser);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const { idea_id: ideaId } = req.body;
  const { usersAssociated } = req.body;

  try {
    const response = await tables.Impacted_user.create(ideaId, usersAssociated);

    if (response.affectedRows > 0) {
      res.sendStatus(201);
    } else {
      res.sendStatus(500);
    }
  } catch (err) {
    res.sendStatus(500);
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

const edit = async (req, res, next) => {
  const { idea_id: ideaId } = req.body;
  const { usersAssociated } = req.body;

  try {
    const usersAssocietedCurrentRes = await tables.Impacted_user.readByIdeaId(
      ideaId
    );
    const usersAssocietedCurrent = usersAssocietedCurrentRes.map((user) => {
      return String(user.userId);
    });

    const forDelete = [];
    const forAdd = [];

    usersAssocietedCurrent.forEach((userId) => {
      if (!usersAssociated.includes(userId)) {
        forDelete.push(userId);
      }
    });

    usersAssociated.forEach((userId) => {
      if (!usersAssocietedCurrent.includes(userId)) {
        forAdd.push(userId);
      }
    });

    if (forDelete.length > 0) {
      await tables.Impacted_user.delete(ideaId, forDelete);
    }

    if (forAdd.length > 0) {
      await tables.Impacted_user.create(ideaId, forAdd);
    }

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
  edit,
};
