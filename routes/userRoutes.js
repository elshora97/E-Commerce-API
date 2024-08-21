const express = require("express");
const routes = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require("../middleware/authentication");

const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
} = require("../controllers/userController");

routes
  .route("/")
  .get(authenticateUser, authorizePermissions("admin"), getAllUsers);
routes.route("/showMe").get(authenticateUser, showCurrentUser);
routes
  .route("/:id")
  .get(authenticateUser, authorizePermissions("admin"), getSingleUser);
routes.route("/updateUser").patch(authenticateUser, updateUser);
routes.route("/updateUserPassword").patch(authenticateUser, updateUserPassword);

module.exports = routes;
