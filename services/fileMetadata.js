const loadPage = function(req,res){
  res.sendFile(process.cwd() + '/views/filemetadata.html');
};
const uploadFile = function (req,res){

};
module.exports = {loadPage};