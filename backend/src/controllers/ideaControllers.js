const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const ideas = await tables.idea.readAllIdea();
    res.json(ideas);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const idea = await tables.idea.read(req.params.id);
    if (idea == null) {
      res.sendStatus(404);
    } else {
      res.json(idea);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const idea = req.body;
  idea.date_limit = new Date(idea.date_limit);
  if (idea.ideaImg === undefined) {
    idea.ideaImg = "/uploads/ideas/default-image-bk.png";
  }
  try {
    const insertId = await tables.idea.create(idea);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const {
    title,
    idea_description: ideaDescription,
    date_limit: bodyDateLimit,
    status_id: statusId,
  } = req.body;

  const dateLimit = new Date(bodyDateLimit);

  const updatedIdea = {
    id: req.params.id,
    title,
    idea_description: ideaDescription,
    date_limit: dateLimit,
    status_id: statusId,
  };

  try {
    await tables.idea.update(updatedIdea);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const editMulter = async (req, res, next) => {
  const {
    title,
    idea_description: ideaDescription,
    ideaImg,
    date_limit: bodyDateLimit,
    status_id: statusId,
  } = req.body;

  const dateLimit = new Date(bodyDateLimit);

  const updatedIdea = {
    id: req.params.id,
    title,
    idea_description: ideaDescription,
    ideaImg,
    date_limit: dateLimit,
    status_id: statusId,
  };

  try {
    await tables.idea.updateMulter(updatedIdea);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const editStatusId = async (req, res, next) => {
  const { status_id: statusId } = req.body;

  const statusUpdatedIdea = {
    status_id: statusId,
    id: req.params.id,
  };

  try {
    await tables.idea.updateStatusId(statusUpdatedIdea);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const editByModerator = async (req, res, next) => {
  const { status_id: statusId, idea_final_comment: ideaFinalComment } =
    req.body;

  const statusUpdatedIdea = {
    status_id: statusId,
    idea_final_comment: ideaFinalComment,
    id: req.params.id,
  };

  try {
    await tables.idea.updateByModerator(statusUpdatedIdea);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.idea.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const editStatusIdByAdmin = async (req, res, next) => {
  const { status_id: statusId, date_limit: dateLimit } = req.body;

  const statusUpdatedIdea = {
    status_id: statusId,
    date_limit: dateLimit,
    id: req.params.id,
  };

  try {
    await tables.idea.updateStatusId(statusUpdatedIdea);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

// On déclare une fonction asynchrone nommée 'upload'
const upload = async (req, res, next) => {
  try {
    // On appelle la méthode 'upload' de l'objet 'idea' de 'tables'
    // On passe en paramètres l'id de l'utilisateur (récupéré depuis les paramètres de la requête)
    // et l'URL de l'image (récupérée depuis le corps de la requête)
    await tables.idea.upload(req.params.id, req.body.url);
    // Si tout se passe bien, on renvoie le statut 200 (OK) et l'URL de l'image

    res.status(200).send(req.body.url);
  } catch (err) {
    // Si une erreur se produit, on passe l'erreur au gestionnaire d'erreurs suivant
    next(err);
  }
};

module.exports = {
  browse,
  read,
  edit,
  editMulter,
  editStatusId,
  editByModerator,
  add,
  destroy,
  editStatusIdByAdmin,
  upload,
};
