// Once document is loaded
$(document).ready(function () {


    // Birth date retrieved by user (minimal MM, DD)
    var birthdate = [];

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
            url: queryURL2,
            method: "GET",
            dataType: "json"
        }).then(function (response) {
            console.log(response);

        });
    }


    // https://cors-anywhere.herokuapp.com/https://astroapp.com/astro/apis/chart/apis/chart
    //https://api.nasa.gov/planetary/apod?api_key=IsroEoHdat5HZ656ttsO2csa6vd9hvaapsRtkNl8

    // Data from astro
    // https://astro-app.net/horoscope.php?lang=EN&d=1&m=1&y=1980&h=12&min=3&sec=99&t=30&mday=1&mmonth=1&myear=1980&mhour=4&mmin=3&brg=32&brm=49&lng=-117&lnm=-8&country=usUnited%20States%20of%20America&rgn=ca-0800California&mro=San%20Diego&city=San%20Diego&id=0&affid=000&sex=2&name=nadine&mp=3&dp=31&yp=2020
    // var queryURL3 = "https://astro-app.net/horoscope.php?lang=EN&d=" + day + "&m=" + month + "&y="+ year + "&h=" + hour + "&min=" + min + "&sec=" + sec + "&t="0 + "&mday=" + dayBirth + "&mmonth=" + monthBirth + "&myear=" + yearBirth + "&mhour=" + hourBirth + "&mmin=" + minBirth + "&brg=" + -16 + "&brm=" + -4 +  "&lng=" + 167 + "&lnm=" + 23 + "&country=" + country + "&rgn=" + 0101100 + "Malampa" + "&mro=" + Norsup + "&city=" + Norsup + "&id=" + 0 + "&affid=" + 000 + "&sex=" + sex + "&name=" + name + "&mp=" + todayMonth + "&dp=" + todayDay+ "&yp=" + todayYear;

    function getData3() {
        //var queryURL3 = "";

        $.ajax({
            url: queryURL3,
            method: "GET",
            dataType: "json"
        }).then(function (response) {
            console.log(response);
            console.log("hello");
            // console.log(reponse.description);

        });

    }

    // Get zodiac with day and month
    function getZodiac(day, month) {

        // Capricorn - Dec 22 - Jan 19
        if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
            return sign = "capricorn";
        }
        // Aquarius - Jan 20 - Feb 18  
        else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
            return sign = "aquarius";
        }
        // Pisces - Feb 19 - March 20
        else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return sign = "pisces";
        }
        // Aries - March 21 - April 19    
        else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
            return sign = "aries";
        }
        // Taurus - April 20 - May 20
        else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
            return sign = "taurus";
        }
        // Gemini - May 21 - June 20
        else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return sign = "gemini";
        }
        // Cancer - June 21 - July 22
        else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
            return sign = "cancer";
        }
        // Leo - July 23 - Aug 22
        else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
            return sign = "leo";
        }
        // Virgo - Aug 23 - Sept 22
        else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
            return sign = "virgo";
        }
        // Libra - Sept 23 - Oct 22
        else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
            return sign = "libra";
        }
        // Scorpio - October 23 - November 21
        else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
            return sign = "scorpio";
        }
        // Sagittarius - November 22 - December 21
        else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
            return sign = "sagittarius";
        }
    }


    getData();
    getData2();
    // getData3();
});
