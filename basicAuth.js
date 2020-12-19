const authUser = (req, res, next) => {
  if (req.user == null) {
    res.status(403);
    return res.send("Please sign in");
  }
  next();
};

module.exports = {
  authUser,
};
