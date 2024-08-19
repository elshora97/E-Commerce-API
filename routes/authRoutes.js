const express = require("express");
const { login, register, logout } = require("../controllers/authController");

const routes = express.Router();

routes.route("/login").post(login);
routes.route("/register").post(register);
routes.route("/logout").get(logout);

module.exports = routes;
