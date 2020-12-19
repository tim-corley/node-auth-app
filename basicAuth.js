// curl --header "Content-Type: application/json" \
// --request GET \
// --data '{"userId": 2}' \
// localhost:3003/admin

const authUser = (req, res, next) => {
  if (req.user == null) {
    res.status(403);
    return res.send("Please sign in");
  }
  next();
};

const authRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      res.status(401);
      return res.send("You do not have access");
    }
    next();
  };
};

module.exports = {
  authUser,
  authRole,
};
