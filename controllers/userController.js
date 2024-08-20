const getAllUsers = (req, res) => {
  res.send("all users");
};

const getSingleUser = (req, res) => {
  res.send("single user");
};

const showCurrentUser = (req, res) => {
  res.send("current user");
};

const updateUser = (req, res) => {
  res.send("update user");
};

const updateUserPassword = (req, res) => {
  res.send("update user Password");
};

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
};
