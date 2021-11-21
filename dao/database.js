const { Sequelize, DataTypes, Op } = require('sequelize');
const fs = require('fs');
const path = require('path');

const connection = new Sequelize(process.env.DB_NAME,process.env.DB_USER, process.env.DB_PASS, {
    dialect: "mysql",
    host: 'localhost'
});

const db = {};

fs.readdirSync(__dirname + '/models/')
    .filter((file) =>
        file !== 'index.js')
    .forEach((file) => {
        const model = require(path.join(__dirname + '/models/', file))(connection, DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.connection = connection;
db.Sequelize = Sequelize;
db.Op = Op;
module.exports = db;