const dbServices = require('../dao/queries/index');
const { uuid } = require('uuidv4');
const db = require('../dao/database');
const loadPage = function(req, res) {
    res.sendFile(process.cwd() + '/views/exercisetracker.html');
  }
const createLog = async function (req,res){
    try {
        var exerciseData = {
            description: req.body.description,
            duration: req.body.duration,
            date:req.body.date,
            id: req.params._id
        };
        const log = await dbServices.exercise.createExerciseLog(exerciseData);
        return res.status(200).send(JSON.stringify(log));
    } catch (error) {
        console.log(error);
        res.status(HttpStatus.BAD_REQUEST).send();
    }
};
const viewLogs = async function (req,res){
    try {
        console.log(req.query.from);
        const logs = await dbServices.exercise.getUserLogs(req.params._id,
            req.query.from,
            req.query.to,
            req.query.limit);
        return res.status(200).send(JSON.stringify(logs));
    } catch (error) {
        console.log(error);
        res.status(HttpStatus.BAD_REQUEST).send();
    }
};
const createUser = async function (req,res){
    console.log(req.body);
    try {
        var userData = {
            username: req.body.username,
            id: uuid(),
        };
        console.log(userData);
        const user = await dbServices.users.createUser(userData);
        return res.status(200).send(JSON.stringify(user));
    } catch (error) {
        console.log(error);
        res.status(HttpStatus.BAD_REQUEST).send();
    }
}
const viewAllUsers = async function (req,res){
    try {
       const users = await dbServices.user.viewAllUsers();
       return res.status(200).send(JSON.stringify(users));
    } catch (error) {
        
    }
}
  module.exports = {
      loadPage,
      createLog,
      viewLogs,
      createUser,
      viewAllUsers

  }