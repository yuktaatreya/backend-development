const parseHeader = function(req,res){
    res.json({ipaddress: req.socket.remoteAddress,
        language: req.headers["accept-language"],
        software: req.get('User-Agent')
      });
};
const loadPage = function(req,res){
  res.sendFile(process.cwd() + '/views/headerparser.html');
}
module.exports = {parseHeader,loadPage};