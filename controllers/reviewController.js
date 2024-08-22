const Review = require("../models/Review");
const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const { chechPermissions } = require("../utils");

const createReview = async (req, res) => {
  const { product: productId } = req.body;
  req.body.user = req.user.userId;

  const isValidProduct = await Product.findOne({ _id: productId });
  if (!isValidProduct) {
    throw new CustomError.NotFoundError(`No product with id : ${productId}`);
  }

  const isAlreadySubmitted = await Review.findOne({
    product: productId,
    user: req.user.userId,
  });
  if (isAlreadySubmitted) {
    throw new CustomError.BadRequestError(
      "Already submitted review for this product"
    );
  }
  const review = await Review.create(req.body);
  res.status(StatusCodes.CREATED).json({ review });
};

const getAllReviews = async (req, res) => {
  const reviews = await Review.find({});
  res.status(StatusCodes.OK).json({ reviews, count: reviews.length });
};

const getSingleReview = async (req, res) => {
  const review = await Review.findOne({ _id: req.params.id });
  if (!review) {
    throw new CustomError.NotFoundError(
      `No product with id : ${req.params.id}`
    );
  }
  res.status(StatusCodes.OK).json({ review });
};

const updateReview = async (req, res) => {
  const { rating, title, comment } = req.body;
  if (!rating || !title || !comment) {
    throw new CustomError.BadRequestError(
      "please provide rating & title &comment "
    );
  }

  const review = await Review.findOne({ _id: req.params.id });
  if (!review) {
    throw new CustomError.NotFoundError(
      `No product with id : ${req.params.id}`
    );
  }
  chechPermissions(req.user, review.user);

  review.rating = rating;
  review.title = title;
  review.comment = comment;

  await review.save();
  res.status(StatusCodes.OK).json({ review });
};

const deleteReview = async (req, res) => {
  const review = await Review.findOneAndDelete({ _id: req.params.id });
  if (!review) {
    throw new CustomError.NotFoundError(
      `No product with id : ${req.params.id}`
    );
  }
  chechPermissions(req.user, review.user);
  res.status(StatusCodes.OK).json({ msg: "Review deleted" });
};

module.exports = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
};
