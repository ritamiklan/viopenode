const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.get("/home", (req, res) => {
  res.send("Welcome to our page");
});

app.get("/home/:name/:age", (req, res) => {
  if (req.params.age > 18)
    res.send("Welcome " + req.params.name + " you are " + req.params.age);
  else res.send("welcome " + req.params.name + " you are too young.");
});

// app.get("/home/user/", (req, res) => {
//   res.json({ username: "John" });
// });

// app.get("/about", (req, res) => {
//   res.send("About us...");
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
