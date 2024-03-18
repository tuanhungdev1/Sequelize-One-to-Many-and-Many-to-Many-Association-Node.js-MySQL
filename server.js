const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:8080",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Build Sequelize One to many !");
});

const db = require("./models/index");
const tutorialController = require("./controllers/tutorial.controller");
const commentController = require("./controllers/comment.controller");
const tagController = require("./controllers/tag.controller");
//Create data temp
const run = async () => {
  const tut1 = await tutorialController.createTutorial({
    title: "tut#1 React Router",
    description: "Tut#1 Description",
  });

  const tut2 = await tutorialController.createTutorial({
    title: "tut#2 React ADvande",
    description: "Tut#1 Description",
  });

  const tut3 = await tutorialController.createTutorial({
    title: "tut#3 React Hook Form",
    description: "Tut#1 Description",
  });

  const cmt4 = await commentController.createComment(tut1.id, {
    name: "HungTran",
    text: "Good job!",
  });

  const cmt5 = await commentController.createComment(tut1.id, {
    name: "Van Khoa",
    text: "Good job!",
  });

  const cmt6 = await commentController.createComment(tut1.id, {
    name: "Alex",
    text: "Good job!",
  });

  const cmt2 = await commentController.createComment(tut2.id, {
    name: "Andrew",
    text: "Good job!",
  });

  const cmt3 = await commentController.createComment(tut3.id, {
    name: "Josmoe",
    text: "Good job!",
  });

  const tag1 = await tagController.createTag({
    name: "Tag#1",
  });

  const tag2 = await tagController.createTag({
    name: "Tag#2",
  });

  await tagController.addTutorial(tag1.id, tut1.id);

  await tagController.addTutorial(tag2.id, tut1.id);

  await tagController.addTutorial(tag1.id, tut2.id);

  await tagController.addTutorial(tag2.id, tut3.id);
};

db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Conneting Data base susscess...");

    run();
  })
  .catch((err) => {
    console.log(`Error: ${err.message ? err.message : "Error..."}`);
  });

app.get("/api/tutorial", (req, res) => {
  tutorialController
    .findAll()
    .then((data) => {
      console.log(">> Susscess...");
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/api/tutorial/:id", (req, res) => {
  tutorialController
    .findById(req.params.id)
    .then((data) => {
      console.log(">> Susscess...");
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/api/tutorial/comment/:id", (req, res) => {
  commentController
    .findCommentById(req.params.id)
    .then((data) => {
      console.log(">> Susscess...");
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/api/tutorial/tag/:id", (req, res) => {
  tagController
    .findById(req.params.id)
    .then((data) => {
      console.log(">> Susscess...");
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server start on PORT ${PORT}`);
});
