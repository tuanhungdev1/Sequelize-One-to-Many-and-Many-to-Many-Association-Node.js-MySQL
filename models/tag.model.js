module.exports = (Sequelize, sequelize) => {
  const Tag = sequelize.define("tag", {
    name: {
      type: Sequelize.STRING,
    },
  });

  return Tag;
};
