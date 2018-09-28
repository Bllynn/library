require("dotenv").config();
const express = require("express"),
  app = express(),
  massive = require("massive");
app.use(express.json());
const controller = require("./controller"),
  bypass = require("./middleware"),
  session = require("express-session");

let { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("ready to fire");
});

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

app.use(express.json());

app.use(bypass.byId(1));

app.use("/assets", express.static("assets"));
app.use(express.static(__dirname + "/../build"));

app.post("/auth/login", controller.login);
//////////////////////////////request level middleware///////////////////
app.put("/auth/register", bypass.checkUserName, controller.createUser);
app.get("/api/user", controller.getUser);
app.get("/books", controller.getBooks);
app.get("/filter", controller.filterBooks);
app.delete("/books/:id", controller.deleteBook);
app.get("/books/:id", controller.getBookDetails);
app.get("/auth/logout", controller.logout);

const port = SERVER_PORT || 1337;
app.listen(port, () => console.log(`server is listening on port ${port}`));
