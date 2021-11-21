const db = require('../database');
const { uuid } = require('uuidv4');
const { Op } = require('sequelize');
const { Sequelize } = require('../database');

const createUser = async (userData) => {
    try {
        return await db.users.create(userData);
    } catch (error) {
        console.log(error);
        return new Error("Server Error");
    }
};
const getAllUsers = async () => {
    try {
        return await db.users.findAll();
    } catch (error) {
        console.log(error);
        return new Error("Server Error");
    }
};
module.exports = {
    createUser,
    getAllUsers
}