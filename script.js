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
            console.log("hello");
            // console.log(reponse.description);

        });

    }

getData();
getData2();
});
