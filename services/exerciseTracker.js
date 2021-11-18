const loadPage = function(req, res) {
    res.sendFile(process.cwd() + '/views/exercisetracker.html');
  }
  module.exports = {
      loadPage
  }