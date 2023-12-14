const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const commentControllers = require("./controllers/commentControllers");
const voteControllers = require("./controllers/voteControllers");
const userNotificationControllers = require("./controllers/userNotificationControllers");
const notificationControllers = require("./controllers/notificationControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);
// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

// Routes user controller
router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.post("/users", userControllers.add);
router.put("/users/:id", userControllers.edit);
router.delete("/users/:id", userControllers.destroy);
// Routes comment controller
router.get("/comments", commentControllers.browse);
router.get("/comments/:id", commentControllers.read);
router.post("/comments", commentControllers.add);
router.put("/comments/:id", commentControllers.edit);
router.delete("/comments/:id", commentControllers.destroy);
// Routes vote controller
router.get("/votes", voteControllers.browse);
router.get("/votes/:id", voteControllers.read);
router.post("/votes", voteControllers.add);
router.put("/votes", voteControllers.edit);
router.delete("/votes", voteControllers.destroy);
// Routes userNotification controller
router.get("/userNotifications/:id", userNotificationControllers.read);
router.get("/userNotifications", userNotificationControllers.browse);
router.post("/userNotifications", userNotificationControllers.add);
router.delete("/userNotifications", userNotificationControllers.destroy);
// Routes notification controller
router.get("/notifications", notificationControllers.browse);
router.get("/notifications/:id", notificationControllers.read);
router.post("/notifications", notificationControllers.add);
router.delete("/notifications/:id", notificationControllers.destroy);

module.exports = router;
