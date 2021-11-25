require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

// app.set("view engine", "hbs");

// hbs.registerPartials(__dirname + "/views/partials");

// Server Static Content
app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.render("home", {
//     name: "Luis Azocar",
//     title: "Curso de Node",
//   });
// });

// app.get("/generic", (req, res) => {
//   res.render("generic", {
//     name: "Luis Azocar",
//     title: "Curso de Node",
//   });
// });

// app.get("/elements", (req, res) => {
//   res.render("elements", {
//     name: "Luis Azocar",
//     title: "Curso de Node",
//   });
// });

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
