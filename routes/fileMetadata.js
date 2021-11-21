const services = require('../services/index');
module.exports = (app) => {
    app.get("/api/filemetadata", services.fileMetadata.loadPage);
}