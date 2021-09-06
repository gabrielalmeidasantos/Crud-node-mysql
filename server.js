const express = require("express");
const app = express();

const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");

const { usuario } = require("./models/usuario");

const port = 3000;

// CONFIGURAÇÃO DO SERVIDOR

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// ------------------------------------

app.get("/", (req, res) => {
  usuario
    .findAll()
    .then((usuarios) => {
      res.render("index", {
        usuarios,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/adicionar", (req, res) => {
  usuario
    .create({
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha,
    })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/apagar/:tipo/:id", (req, res) => {
  if (req.params.tipo === "usuario") {
    usuario
      .destroy({ where: { id: req.params.id } })
      .then(() => {
        res.redirect("/");
      })
      .catch((err) => {
        res.send(err);
      });
  }
});

app.post("/editar", (req, res) => {
  usuario
    .update(
      {
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
      },
      {
        where: { id: req.body.id },
      }
    )
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });

  //   res.send(req.body);
});

app.listen(port, () => {
  console.log(`rodando na url http://127.0.0.1:${port}`);
});
