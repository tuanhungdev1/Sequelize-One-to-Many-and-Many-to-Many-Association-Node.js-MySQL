const db = require("../models/index");
const Tag = db.tags;

exports.createTag = (tag) => {
  return Tag.create({
    name: tag.name,
  })
    .then((tag) => {
      console.log(">> Create Tag: " + JSON.stringify(tag, null, 4));

      return tag;
    })
    .catch((err) => {
      console.log(">> Error while creating Tag: ", err);
    });
};

exports.findAll = () => {
  return Tag.findAll({
    include: [
      {
        model: db.tutorials,
        as: "tutorials",
        attributes: ["id", "title", "description"],
        through: {
          attributes: [],
        },
      },
    ],
  })
    .then((tag) => {
      return tag;
    })
    .catch((err) => {
      console.log(">> Error while retriveing Tags: ", err);
    });
};

exports.addTutorial = (tagId, tutorialId) => {
  return Tag.findByPk(tagId)
    .then((tag) => {
      if (!tag) {
        console.log(">> Tag not found!");
        return null;
      }

      return db.tutorials.findByPk(tutorialId).then((tutorial) => {
        if (!tutorial) {
          console.log(">> Tutorial not found!");
          return null;
        }

        tag.addTutorial(tutorial);
        console.log(`>> Added Tutorial id=${tutorial.id}`);
        return tag;
      });
    })
    .catch((err) => {
      console.log(">> Error while adding Tutorial to Tag: ", err);
    });
};

exports.findById = (id) => {
  return Tag.findByPk(id, {
    include: [
      {
        model: db.tutorials,
        as: "tutorials",
        attributes: ["id", "title", "description"],
        through: {
          attributes: [],
        },
      },
    ],
  })
    .then((tag) => {
      return tag;
    })
    .catch((err) => {
      console.log(">> Error while finding Tag: ", err);
    });
};
