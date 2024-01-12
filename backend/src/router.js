const express = require("express");
const multer = require("multer");
const { v4 } = require("uuid");

const options = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    const name = `${v4()}-${file.originalname}`;
    req.body.url = name;
    cb(null, name);
  },
  limits: {
    fieldSize: 1024 * 5,
  },
});

const upload = multer({
  storage: options,
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
const notificationControllers = require("./controllers/notificationControllers"); // test ok
const userNotificationControllers = require("./controllers/userNotificationControllers"); // test ok (no read)
const voteControllers = require("./controllers/voteControllers"); // test ok
const impactedUserControllers = require("./controllers/impactedUserControllers"); // test ok
const commentControllers = require("./controllers/commentControllers"); // test ok
const authControllers = require("./controllers/authControllers");
const { verifyToken } = require("./services/auth");

// Routes authentification
router.post("/login", authControllers.login);
router.post("/signin", authControllers.signin);

// Authentification wall
router.use(verifyToken);

// Routes user controllers
router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.get("/users-by-token", userControllers.readByToken);
router.post("/users", userControllers.add);
router.put("/users/:id", userControllers.edit);
router.delete("/users/:id", userControllers.destroy);
router.put("/users/moderator/:id", userControllers.addModerator);
router.put("/users/remove-moderator/:id", userControllers.deleteModerator);

// Route to get a list of items
router.get("/items", itemControllers.browse);
// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);
// Route to add a new item
router.post("/items", itemControllers.add);

// Routes status-idea controllers
router.get("/status-idea", statusIdeaControllers.browse);
router.get("/status-idea/:id", statusIdeaControllers.read);
// Routes idea controllers
router.get("/ideas", ideaControllers.browse);
router.get("/ideas/:id", ideaControllers.read);
router.post("/ideas", ideaControllers.add);
router.put("/ideas/:id", ideaControllers.edit);
router.put("/ideas/change-status/:id", ideaControllers.editStatusId);
router.delete("/ideas/:id", ideaControllers.destroy);
router.put("/ideas/admin-decision/:id", ideaControllers.editStatusIdByAdmin);
// Routes notification controllers
router.get("/notifications", notificationControllers.browse);
router.get("/notifications/:id", notificationControllers.read);
router.post("/notifications", notificationControllers.add);
router.delete("/notifications/:id", notificationControllers.destroy);
// Routes userNotification controllers
router.get("/user-notifications", userNotificationControllers.browse);
router.get(
  "/user-notifications/users/:id",
  userNotificationControllers.readByUserId
);
router.get(
  "/user-notifications/notifications/:id",
  userNotificationControllers.readByNotificationId
);
router.post("/user-notifications", userNotificationControllers.add);
router.delete("/user-notifications", userNotificationControllers.destroy);
// Routes vote controllers
router.get("/votes", voteControllers.browse);
router.get("/votes/users/:id", voteControllers.readByUserId);
router.get("/votes/ideas/:id", voteControllers.readByIdeaId);
router.post("/votes", voteControllers.add);
router.put("/votes", voteControllers.edit);
router.delete("/votes", voteControllers.destroy);
// Routes impacted user controllers
router.get("/impacted-users", impactedUserControllers.browse);
router.get("/impacted-users/users/:id", impactedUserControllers.readByUserId);
router.get("/impacted-users/ideas/:id", impactedUserControllers.readByIdeaId);
router.post("/impacted-users", impactedUserControllers.add);
router.delete("/impacted-users", impactedUserControllers.destroy);
// Routes comment controllers
router.get("/comments", commentControllers.browse);
router.get("/comments-by-idea/:ideaId", commentControllers.getByIdeaId);
router.get("/comments/:id", commentControllers.read);
router.post("/comments", commentControllers.add);
router.put("/comments/:id", commentControllers.edit);
router.delete("/comments/:id", commentControllers.destroy);

// Routes authentification
router.post("/login", authControllers.login);
router.post("/signin", authControllers.signin);

// Routes upload
router.put("/upload/:id", upload.single("image"), userControllers.upload);

module.exports = router;
