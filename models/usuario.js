const { Sequelize, sequelize } = require("../sequelize");

const usuario = sequelize.define("usuarios", {
  nome: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  senha: {
    type: Sequelize.STRING,
  },
});

// usuario.sync({ force: true }); // forçando para que crie a tabela

module.exports = { usuario };
