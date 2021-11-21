const services = require('../services/index');
module.exports = (app) => {
    app.get('/exercisetracker',services.exerciseTracker.loadPage );
    app.post('/api/users',services.exerciseTracker.createUser);
    app.get('/api/users',services.exerciseTracker.viewAllUsers);
    app.post('/api/users/:_id/exercises',services.exerciseTracker.createLog);
    app.get('/api/users/:_id/logs?',services.exerciseTracker.viewLogs);

}