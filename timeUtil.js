var time = function (userDate){
    if (userDate==null){
        var data = {
            "unix" : new Date().getTime(),
            "utc" : new Date().toUTCString()
        }
        return data;
    }
    var dateInt = parseInt(userDate);
    var date ;

        if(isNaN(userDate)) {
            date = userDate;
        }
        else {
            date = dateInt;
        }
       var dateObj = new Date(date);

    if(dateObj=="Invalid Date"){
        var data = {
            "error" : "Invalid date"
        }
        return data;
    }
    var data = {
        "unix" : dateObj.valueOf(),
        "utc" : dateObj.toUTCString()
    }
    console.log(data);
    return data;
}
module.exports = time;
