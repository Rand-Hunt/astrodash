// Once document is loaded
    var resp = "";

$(document).ready(function () {
    var sign = "cancer";

    $(".submit").on("click", function (event) {

        event.preventDefault();

    });

    function chineseZodiac(indate) {
        // using moment.js and moment-lunar.js

        var zodiacTable = ["Monkey","Rooster","Dog","Pig","Rat","Ox","Tiger","Rabbit","Dragon","Snake","Horse","Goat"]

        //convert date into lunar date
        var tlunar2 = moment(indate).lunar().format('YYYY-MM-DD')

        console.log("Test "+indate+" into lunar is "+tlunar2)

        var tlunarYear = moment(tlunar2).year();

        tsign = zodiacTable[tlunarYear % 12]

        console.log(tsign)

        // 1924 = Rat
        // 1920 % 12 = 0



    }



    function getDataBoth() {
        getData2();
        getData3();
    }

    function getData3() {
        console.log("resp2 = " + resp);
        token = "8921d8d3e0274f0997aa91de967aca75";

        queryURL3 =
            "https://api.dandelion.eu/datatxt/sent/v1/?text=" +
            encodeURI(resp) +
            "&token=" +token;
            console.log(queryURL3);
            $.ajax({
                type: "POST",
                url: queryURL3,
                dataType: "json"
            }).then(function (response) {
                console.log(response);
                console.log(response.sentiment.type)
            }
    )}

    function getData2(options,callback) {
        console.log("resp2 = " + resp);
        token = "8921d8d3e0274f0997aa91de967aca75";

        queryURL2 =
            "https://api.dandelion.eu/datatxt/nex/v1/?text=" +
            encodeURI(resp) +
            "&min_confidence=0.5"+
            // "&top_entities=1"+
            "&token=" +token;

        console.log(queryURL2);
            $.ajax({
                type: "POST",
                url: queryURL2,
                dataType: "json"
            }).then(function (response) {
                //   console.log(response);
                // console.log(reponse.description);
                var arr = response.annotations;
                // sample reply  arr[x]   (useful spot,title, label)
                // start: 191
                // end: 196
                // spot: "happy"    
                // confidence: 0.5371
                // id: 169409
                // title: "Happiness"
                // uri: "http://en.wikipedia.org/wiki/Happiness"
                // label: "Happiness"


                //  concat version
                //concat = ""
                // for (var i=0; i<arr.length;i++) {
                //     concat = concat + arr[i].label
                // }
                // random version
                var rand = Math.floor(Math.random()*arr.length)
                console.log(arr[rand].label);
                // callback();
            });
    }
 
    function getData(options,callback) {

        // var queryURL = "https://ohmanda.com/api/horoscope/" + sign + "/";

        // var queryURL = "https://cors-anywhere.herokuapp.com/https://sandipbgt.com/theastrologer/api/horoscope/"+sign+"/today/"
// var res;

 var queryURL = "https://aztro.sameerkumar.website?sign=" + sign + "&day=today";

        
        $.ajax({
            type: "POST",
            url: queryURL,
            dataType: "json"
        }).then(function (response) {
            // options = response.description;
            resp = response.description;
            // console.log(response);
            // console.log(response.description);
            // console.log("options="+options)
            // console.log("resp="+resp)
            callback();
        });
    }

    // getData(resp,getDataBoth);
   
    //test Chinese Zodiac

    chineseZodiac("1970-01-01");

    });
