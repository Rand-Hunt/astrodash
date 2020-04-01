// Once document is loaded
$(document).ready(function () {

    var sign = "aries";

    $(".submit").on("click", function (event) {

        event.preventDefault();

        // Astro sign input
        // sign = $("#sign").val();
        // sign = "gemini";

    });


    // Data from aztro
    function getData() {

        var queryURL = "https://aztro.sameerkumar.website?sign=" + sign + "&day=today";

        $.ajax({
            type: "POST",
            url: queryURL,
            dataType: "json"
        }).then(function (response) {
            console.log(response);
            console.log(response.description);

        });

    }

    // Data from aztro
    function getData2() {

        var queryURL2 = "https://cors-anywhere.herokuapp.com/http://sandipbgt.com/theastrologer/api/horoscope/" + sign + "/today/";
        $.ajax({
            // headers: {
            //     "Access-Control-Allow-Origin": "*",
            //     "Content-Type": "application/json"
            //   },
            // type: 'POST',
            url: queryURL2,
            method: "GET",
            dataType: "json"
        }).then(function (response) {
            console.log(response);
            // console.log("hello");
            // console.log(reponse.description);

        });
    }


    // https://cors-anywhere.herokuapp.com/https://astroapp.com/astro/apis/chart/apis/chart
    //https://api.nasa.gov/planetary/apod?api_key=IsroEoHdat5HZ656ttsO2csa6vd9hvaapsRtkNl8

    // Data from astro
    // https://astro-app.net/horoscope.php?lang=EN&d=1&m=1&y=1980&h=12&min=3&sec=99&t=30&mday=1&mmonth=1&myear=1980&mhour=4&mmin=3&brg=32&brm=49&lng=-117&lnm=-8&country=usUnited%20States%20of%20America&rgn=ca-0800California&mro=San%20Diego&city=San%20Diego&id=0&affid=000&sex=2&name=nadine&mp=3&dp=31&yp=2020
    function getData3() {
        // var queryURL3 = "https://astro-app.net/horoscope.php?lang=EN&d=" + day + "&m=" + month + "&y="+ year + "&h=" + hour + "&min=" + min + "&sec=" + sec + "&t="0 + "&mday=" + dayBirth + "&mmonth=" + monthBirth + "&myear=" + yearBirth + "&mhour=" + hourBirth + "&mmin=" + minBirth + "&brg=" + -16 + "&brm=" + -4 +  "&lng=" + 167 + "&lnm=" + 23 + "&country=" + country + "&rgn=" + 0101100 + "Malampa" + "&mro=" + Norsup + "&city=" + Norsup + "&id=" + 0 + "&affid=" + 000 + "&sex=" + sex + "&name=" + name + "&mp=" + todayMonth + "&dp=" + todayDay+ "&yp=" + todayYear;
        var queryURL3 = "";
        $.ajax({
            // headers: {
            //     "Access-Control-Allow-Origin": "*",
            //     "Content-Type": "application/json"
            //   },
            // type: 'POST',
            url: queryURL3,
            method: "GET",
            dataType: "json"
        }).then(function (response) {
            console.log(response);
            console.log("hello");
            // console.log(reponse.description);

        });

    }

    getData();
    getData2();
    // getData3();
});
