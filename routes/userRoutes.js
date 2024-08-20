const express = require("express");
const routes = express.Router();

const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
} = require("../controllers/userController");

routes.route("/").get(getAllUsers);
routes.route("/showMe").get(showCurrentUser);
routes.route("/:id").get(getSingleUser);
routes.route("/updateUser").patch(updateUser);
routes.route("/updateUserPassword").patch(updateUserPassword);

module.exports = routes;
