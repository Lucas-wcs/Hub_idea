const express = require("express");
const multer = require("multer");
const { v4 } = require("uuid");

const optionsAvatar = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/avatars");
  },
  filename: (req, file, cb) => {
    const name = `${v4()}-${file.originalname}`;
    req.body.url = `/uploads/avatars/${name}`;
    cb(null, name);
  },
  limits: {
    fieldSize: 1024 * 5,
  },
});

const uploadAvatar = multer({
  storage: optionsAvatar,
});

const optionsIdea = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/ideas");
  },
  filename: (req, file, cb) => {
    const name = `${v4()}-${file.originalname}`;

    req.body.ideaImg = `/uploads/ideas/${name}`;
    cb(null, name);
  },
  limits: {
    fieldSize: 1024 * 5,
  },
});

const uploadIdea = multer({
  storage: optionsIdea,
});

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers"); // test ok
const statusIdeaControllers = require("./controllers/statusIdeaControllers"); // test ok
const ideaControllers = require("./controllers/ideaControllers"); // test ok
const voteControllers = require("./controllers/voteControllers"); // test ok
const impactedUserControllers = require("./controllers/impactedUserControllers"); // test ok
const commentControllers = require("./controllers/commentControllers"); // test ok
const authControllers = require("./controllers/authControllers");
const { verifyToken } = require("./services/auth");

// Routes authentification
router.post("/login", authControllers.login);
router.post("/signin", authControllers.signin);

// Routes user controllers
router.get("/users", verifyToken, userControllers.browse);
router.get("/users/:id", verifyToken, userControllers.read);
router.get("/users-by-token", verifyToken, userControllers.readByToken);
router.post("/users", verifyToken, userControllers.add);
router.put(
  "/users/:id",
  verifyToken,
  userControllers.verifyPasswordByToken,

  userControllers.edit
);
router.delete("/users/:id", verifyToken, userControllers.destroy);
router.put("/users/moderator/:id", verifyToken, userControllers.addModerator);
router.put(
  "/users/remove-moderator/:id",
  verifyToken,
  userControllers.deleteModerator
);

// Route to get a list of items
router.get("/items", verifyToken, itemControllers.browse);
// Route to get a specific item by ID
router.get("/items/:id", verifyToken, itemControllers.read);
// Route to add a new item
router.post("/items", verifyToken, itemControllers.add);

// Routes status-idea controllers
router.get("/status-idea", verifyToken, statusIdeaControllers.browse);
router.get("/status-idea/:id", verifyToken, statusIdeaControllers.read);
// Routes idea controllers
router.get("/ideas", verifyToken, ideaControllers.browse);
router.get("/ideas/:id", verifyToken, ideaControllers.read);
router.post(
  "/ideas",
  verifyToken,
  uploadIdea.single("ideaImage"),
  ideaControllers.add
);
router.put(
  "/ideas/change-image/:id",
  verifyToken,
  uploadIdea.single("ideaImage"),
  ideaControllers.editMulter
);
router.put(
  "/ideas/:id",
  verifyToken,
  uploadIdea.single("ideaImage"),
  ideaControllers.edit
);
router.put(
  "/ideas/change-status/:id",
  verifyToken,
  ideaControllers.editStatusId
);
router.put(
  "/ideas/moderator/:id",
  verifyToken,
  ideaControllers.editByModerator
);
router.delete("/ideas/:id", verifyToken, ideaControllers.destroy);
router.put(
  "/ideas/admin-decision/:id",
  verifyToken,
  ideaControllers.editStatusIdByAdmin
);

// Routes vote controllers
router.get("/votes", verifyToken, voteControllers.browse);
router.get("/votes/users/:id", verifyToken, voteControllers.readByUserId);
router.get("/votes/ideas/:id", verifyToken, voteControllers.readByIdeaId);
router.post("/votes", verifyToken, voteControllers.add);
router.put("/votes", verifyToken, voteControllers.edit);
router.delete("/votes", verifyToken, voteControllers.destroy);
// Routes impacted user controllers
router.get("/impacted-users", verifyToken, impactedUserControllers.browse);
router.get(
  "/impacted-users/users/:id",
  verifyToken,
  impactedUserControllers.readByUserId
);
router.get(
  "/impacted-users/ideas/:id",
  verifyToken,
  impactedUserControllers.readByIdeaId
);
router.post("/impacted-users", verifyToken, impactedUserControllers.add);
router.put("/impacted-users", verifyToken, impactedUserControllers.edit);
router.delete("/impacted-users", verifyToken, impactedUserControllers.destroy);
// Routes comment controllers
router.get("/comments", verifyToken, commentControllers.browse);
router.get(
  "/comments-by-idea/:ideaId",
  verifyToken,
  commentControllers.getByIdeaId
);
router.get("/comments/:id", verifyToken, commentControllers.read);
router.post("/comments", verifyToken, commentControllers.add);
router.put("/comments/:id", verifyToken, commentControllers.edit);
router.delete("/comments/:id", verifyToken, commentControllers.destroy);

// Routes authentification
router.post("/login", verifyToken, authControllers.login);
router.post("/signin", verifyToken, authControllers.signin);

// Routes upload
router.put(
  "/upload/:id",
  verifyToken,
  uploadAvatar.single("AvatarImage"),
  userControllers.upload
);

module.exports = router;
