// Once document is loaded
$(document).ready(function () {

    var sign = "gemini";

    $(".submit").on("click", function (event) {

        event.preventDefault();

        // Astro sign input
        // sign = $("#sign").val();
        // sign = "gemini";

    });


    function getData() {

        var queryURL = "https://ohmanda.com/api/horoscope/" + sign + "/";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

        });
    }

    getData();
});
