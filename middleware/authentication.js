const CustomError = require("../errors");
const { isTokenVerify } = require("../utils");

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token;
  if (!token) {
    throw new CustomError.UnauthenticatedError("Authentication Invalid");
  }
  try {
    const { name, userId, role } = isTokenVerify({ token });
    req.user = { name, userId, role };
    next();
  } catch (error) {
    throw new CustomError.UnauthenticatedError("Authentication Invalid");
  }
};

const authorizePermissions = (...Roles) => {
  return (req, res, next) => {
    if (!Roles.includes(req.user.role)) {
      throw new CustomError.UnauthorizedError(
        "Unauthorized to access this route "
      );
    }
    next();
  };
};

module.exports = { authenticateUser, authorizePermissions };
