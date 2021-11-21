const db = require('../database');
const { uuid } = require('uuidv4');
const { Op } = require('sequelize');
const { Sequelize } = require('../database');
const moment = require('moment');

const createExerciseLog = async (exerciseData) => {
    console.log(exerciseData);
    try {
        
        var log={
            id:uuid(),
            userid:exerciseData.id,
            description:exerciseData.description,
            duration:exerciseData.duration,
            date:exerciseData.date
        } 
        return await db.exercises.create(log);

        
    } catch (error) {
        console.log(error);
        return new Error("Server Error");
    }
};
const getUserLogs = async (userId,from,to,limit) => {
    var logs;
    let limits = {};
    if(limit){
        limits['limit'] =  parseInt(limit);
    };
    try {
        if ((from == undefined) || (to == undefined)) {
            logs = await db.exercises.findAll({
                where: {
                    userid: userId
                },
                limit:limits.limit
            });
        }
        
        else {
            logs = await db.exercises.findAll({
                where: {
                    userid: userId,
                    date: {
                        [Op.between]: [from,to]
                    }
                },
                limit:limits.limit
            });
            console.log('not null');
        }
        var user = await db.users.findAll({
            where : {
                id : userId
            },
            limit:1
        })
        return {
            username: user[0].username,
            count: logs.length,
            id: user[0].id,
            log: logs
        };
    } catch (error) {
        console.log(error);
        return new Error("Server Error");
    }
};
const getLogById = async (logId) =>{
    try {
        const log = await db.exercises.findAll({
            where : {
               id: logId 
            }
        });
        return log; 
    } catch (error) {
        console.log(error);
        return new Error("Server Error");
    }
};
module.exports = {
    createExerciseLog,
    getUserLogs,
    getLogById
}