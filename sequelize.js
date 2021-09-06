const Sequelize = require("sequelize");
const sequelize = new Sequelize("NOME-BASE-DE-DADOS", "USUARIO", "SENHA", {
  host: "localhost",
  dialect: "mysql",
});

// essa linha de código abaixo é usada para verificar a conexão com a base de dados

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("conectou");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

module.exports = {
  Sequelize,
  sequelize,
};
