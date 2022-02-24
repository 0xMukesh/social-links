const cors = require("cors");
const express = require("express");
const data = require("./data/links.json");
const config = require("./data/config.json");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  res.redirect(`${config.BASE_URL}`);
});

app.get("/:name", async (req, res) => {
  const slugLink = data["social"][req.params.name];
  if (slugLink === undefined) {
    res.redirect(`${config.BASE_URL}`);
  } else {
    res.redirect(slugLink);
  }
});

app.get("/project", async (req, res) => {
  res.redirect(`${config.PROJECTS_URL}`);
});

app.get("/project/:name", async (req, res) => {
  const slugLink = data["projects"][req.params.name];
  if (slugLink === undefined) {
    res.redirect(`${config.BASE_URL}`);
  } else {
    res.redirect(slugLink);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});

module.exports = app;
