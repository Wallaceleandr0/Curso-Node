const Sequelize = require('sequelize')
// Conexão com o banco de dados mysql
const sequelize = new Sequelize('postapp', 'root', 'senha', {
    host: "localhost",
    dialect: 'mysql',
    query:{raw:true}
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}