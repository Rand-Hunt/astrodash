// Once document is loaded
$(document).ready(function () {

    var sign = "gemini";

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
            type: 'POST',
            url: queryURL,
            dataType: "json"
        }).then(function (reponse) {
            console.log(reponse);
            console.log(reponse.description);

        });

    }

getData();
});
