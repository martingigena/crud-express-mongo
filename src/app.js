const express = require("express");
const logger = require("morgan");
const app = express();
const path = require("path");

const indexRoutes = require("./routes/index.js");

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRoutes);

app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});
