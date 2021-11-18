var urls=[];
    var nextShort=0;
    var index;
    var isValidUrl=function isUrl(s) {
        var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
        return regexp.test(s);
    };
const loadPage = function(req,res){
    res.sendFile(process.cwd() + '/views/urlshortener.html');
};
const postShortUrl = function(req,res){
    console.log(req.body);
    var userUrl=req.body.url;
    if(isValidUrl(userUrl)){
      if(userUrl in urls)
    {
      index=urls.indexOf(userUrl);
    }
    else {
      urls.push(userUrl);
      nextShort=urls.indexOf(userUrl);
      index=nextShort;
      nextShort++;
    }
    
    res.json({ original_url : userUrl, short_url : index });
  }
  else{
    res.json({ error: 'invalid url' });
}
};
const getOriginalUrl = function(req,res){

    var shortUrl=req.params.shortUrl;
    var original_url = urls[shortUrl];
    console.log(original_url);
    if(original_url==undefined){
      res.send("error");
    }
    else {
      res.redirect(urls[shortUrl]);
      
    }
};
module.exports = {
    loadPage,
    postShortUrl,
    getOriginalUrl

};