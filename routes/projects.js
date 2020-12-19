const express = require("express");
const router = express.Router();
const { projects } = require("../data");
const { authUser } = require("../basicAuth");
const { canViewProject, scopedProjects } = require("../permissions/project");

// curl --header "Content-Type: application/json" \
// --request GET \
// --data '{"userId": 3}' \
// localhost:3003/projects/2

router.get("/", authUser, (req, res) => {
  res.json(scopedProjects(req.user, projects));
});

router.get("/:projectId", setProject, authUser, authGetProject, (req, res) => {
  res.json(req.project);
});

function setProject(req, res, next) {
  const projectId = parseInt(req.params.projectId);
  req.project = projects.find((project) => project.id === projectId);

  if (req.project == null) {
    res.status(404);
    return res.send("No project found");
  }
  next();
}

function authGetProject(req, res, next) {
  if (!canViewProject(req.user, req.project)) {
    res.status(401);
    return res.send("Not allowed");
  }
  next();
}

module.exports = router;
