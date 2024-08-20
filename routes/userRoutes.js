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
routes.route("/updateUser").post(updateUser);
routes.route("/updateUserPassword").post(updateUserPassword);

module.exports = routes;
