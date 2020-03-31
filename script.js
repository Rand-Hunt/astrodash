// Once document is loaded
$(document).ready(function () {

    var sign = "";

    $(".submit").on("click", function (event) {

        event.preventDefault();

        // Astro sign input
        // sign = $("#sign").val();
        sign = "gemini";

    });


    function getData() {

        var queryURL = "http://ohmanda.com/api/horoscope/" + sign;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

        });
    }
});
