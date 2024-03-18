const Sequelize = require("sequelize");
const dbConfig = require("../configs/db.config");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: "mysql",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model")(Sequelize, sequelize);
db.comments = require("./comment.model")(Sequelize, sequelize);
db.tags = require("./tag.model")(Sequelize, sequelize);

db.tutorials.hasMany(db.comments, { as: "comments" });
db.comments.belongsTo(db.tutorials, {
  foreignKey: "tutorialId",
  as: "tutorial",
});

db.tutorials.belongsToMany(db.tags, {
  through: "tutorial_tag",
  as: "tags",
  foreignKey: "tag_id",
});

db.tags.belongsToMany(db.tutorials, {
  through: "tutorial_tag",
  as: "tutorials",
  foreignKey: "tutorial_id",
});

module.exports = db;
