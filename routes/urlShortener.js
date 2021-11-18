const services = require('../services/index');
module.exports = (app) => {
    app.get('/urlShortener',services.urlShortener.loadPage);
    app.post('/api/urlShortener/shorturl',services.urlShortener.postShortUrl);
    app.get('/api/urlShortener/shorturl/:shortUrl?',services.urlShortener.getOriginalUrl);
}
