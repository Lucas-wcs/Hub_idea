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
    const user = await tables.User.getByMail(req.body.email);

    if (user.length > 0 && Number(user[0]?.id) !== Number(req.params.id)) {
      res.status(400).send("Email already exists");
    } else if (
      user.length === 0 ||
      (user.length > 0 && user[0]?.id === Number(req.params.id))
    ) {
      if (req.body.password === "") {
        req.body.password = user[0]?.password;
      }

      const response = await tables.User.update(req.body);

      if (response.affectedRows > 0) {
        res.sendStatus(200);
      } else {
        res.sendStatus(500);
      }
    }
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

// upload image

// On déclare une fonction asynchrone nommée 'upload'
const upload = async (req, res, next) => {
  try {
    // On appelle la méthode 'upload' de l'objet 'User' de 'tables'
    // On passe en paramètres l'id de l'utilisateur (récupéré depuis les paramètres de la requête)
    // et l'URL de l'image (récupérée depuis le corps de la requête)
    await tables.User.upload(req.params.id, req.body.url);
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
  readByToken,
  edit,
  add,
  destroy,
  addModerator,
  deleteModerator,
  upload,
};
