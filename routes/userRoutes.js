const express = require("express");
const routes = express.Router();
const { authenticateUser } = require("../middleware/authentication");

const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
} = require("../controllers/userController");

routes.route("/").get(authenticateUser, getAllUsers);
routes.route("/showMe").get(showCurrentUser);
routes.route("/:id").get(authenticateUser, getSingleUser);
routes.route("/updateUser").patch(updateUser);
routes.route("/updateUserPassword").patch(updateUserPassword);

module.exports = routes;
