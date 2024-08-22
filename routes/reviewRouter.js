const express = require("express");
const routes = express.Router();
const { authenticateUser } = require("../middleware/authentication");

const {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");

routes.route("/").post(authenticateUser, createReview).get(getAllReviews);

routes
  .route("/:id")
  .get(getSingleReview)
  .patch(authenticateUser, updateReview)
  .delete(authenticateUser, deleteReview);

module.exports = routes;
