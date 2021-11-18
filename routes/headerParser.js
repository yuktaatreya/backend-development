const services = require('../services/index');
module.exports = (app) => {
    app.get("/api/headerParser/whoami", services.headerParser.parseHeader);
    app.get('/headerParser', services.headerParser.loadPage);
}