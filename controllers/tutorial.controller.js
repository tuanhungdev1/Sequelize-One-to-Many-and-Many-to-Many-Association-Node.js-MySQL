const db = require("../models/index");
const Tutorial = db.tutorials;

exports.createTutorial = (tutorial) => {
  return Tutorial.create({
    title: tutorial.title,
    description: tutorial.description,
  })
    .then((tutorial) => {
      console.log(">> Created tutorial: " + JSON.stringify(tutorial, null, 4));
      return tutorial;
    })
    .catch((err) => {
      console.log(">> Error while creating tutorial: ", err);
    });
};

exports.findTutorialById = (tutorialId) => {
  return Tutorial.findByPk(tutorialId, { include: "comments" })
    .then((tutorial) => {
      return tutorial;
    })
    .catch((err) => {
      console.log(">> Error while finding tutorial: ", err);
    });
};

exports.findAll = () => {
  return Tutorial.findAll({
    include: [
      {
        model: db.tags,
        as: "tags",
        attributes: ["id", "name"],
        through: {
          attributes: [],
        },
      },
      {
        model: db.comments,
        as: "comments",
      },
    ],
  })
    .then((tutorials) => {
      return tutorials;
    })
    .catch((err) => {
      console.log(">> Error while finding tutorial ", err);
    });
};

exports.findById = (id) => {
  return Tutorial.findByPk(id, {
    include: [
      {
        model: db.tags,
        as: "tags",
        attributes: ["id", "name"],
        through: {
          attributes: [],
        },
      },
      {
        model: db.comments,
        as: "comments",
      },
    ],
  })
    .then((tutorial) => {
      return tutorial;
    })
    .catch((err) => {
      console.log(">> Error while finding Tutorial: ", err);
    });
};
