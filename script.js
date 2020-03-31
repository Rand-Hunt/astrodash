// Once document is loaded
    var resp = "";

$(document).ready(function () {
    var sign = "gemini";

    $(".submit").on("click", function (event) {

        event.preventDefault();

    });

    function getData2() {
      console.log("resp2 = " + resp);
      token = "8921d8d3e0274f0997aa91de967aca75";

      queryURL2 =
        "https://api.dandelion.eu/datatxt/nex/v1/?text=" +
        encodeURI(resp) +
        "&min_confidence=0.2"+
        // "&top_entities=4"+
        "&token=" +token;

      console.log(queryURL2);
          $.ajax({
              type: "POST",
              url: queryURL2,
              dataType: "json"
          }).then(function (response) {
              console.log(response);
              // console.log(reponse.description);
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
            options = response.description;
            resp = response.description;
            // console.log(response);
            // console.log(response.description);
            console.log("options="+options)
            console.log("resp="+resp)
            callback();
        });
    }

    getData(resp,getData2);
    // getData2();

    });
