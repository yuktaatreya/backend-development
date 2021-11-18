const services = require('../services/index');
module.exports = (app) => {
    app.get("/api/timestampMicroservice/:date?",services.timestamp.getTimestamp);
    app.get('/timestampMicroservice',services.timestamp.loadPage);
}
