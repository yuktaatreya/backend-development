const services = require('../services/index');
module.exports = (app) => {
    app.get('/exercisetracker',services.exerciseTracker.loadPage );
}