const express = require("express");
const hbs = require("express-handlebars");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

const indexRouter = require("./routes/indexRouter.js");
const weatherRouter = require("./routes/weatherRouter.js");
const errRouter = require("./routes/errRouter.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.engine(
  "hbs",
  hbs({
    defaultLayout: "main",
    extname: ".hbs",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "partials"),
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", ".hbs");

app.use("/", indexRouter);
app.use("/weather", weatherRouter);
app.use("*", errRouter);

app.listen(3000, () => {
  console.log("listening to port 3000");
});
