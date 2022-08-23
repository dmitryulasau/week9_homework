// SERVER SETUP //////////////////////////
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const app = express();
dotenv.config();

app.set("view engine", "ejs"); // SET THE VIEW ENGINE TO 'EJS'
app.set("views", path.join(__dirname, "/src/templates/views")); // TELL 'EXPRESS' WHERE THE VIEW FOLDER WILL LIVE
/////////////////////////////////////////

// HOME
app.get("/", (req, res) => {
  res.render("index");
});

// PROFILE
app.get("/profile", (req, res) => {
  res.render("profile");
});

// LINK TO USERS ROUTER //////////////////////////
const userRouter = require("./routes/users");
app.use("/users", userRouter);
/////////////////////////////////////////////////

// LINK TO AUTH ROUTER //////////////////////////
const authRouter = require("./routes/auth");
app.use("/auth", authRouter);
/////////////////////////////////////////////////

// LINK TO POST ROUTER //////////////////////////
const postRouter = require("./routes/post");
app.use("/post", postRouter);
/////////////////////////////////////////////////

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT} ...`);
});
