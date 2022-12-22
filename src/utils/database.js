const { Sequelize } = require('sequelize')
const config = require('../../config')

const db = new Sequelize({
    dialect: 'postgres',  // se pude cambiar al dialecto que necesito ejemplo : sql
    host: config.db.host,
    username: config.db.user,
    password: config.db.pass,
    database: config.db.name,
    port: config.db.port,
    dialectOptions:
    process.env.NODE_ENV === 'production'
    ?{
        ssl:{
            require:true,
            rejectUnauthorized:false
        }
    }:{}
})


module.exports = db
