// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    let userInput = $("#search-term").val();
    let requestLink = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&rating=pg&api_key=dc6zaTOxFJmzC";
    console.log(requestLink);
    fetch(requestLink)
        .then(function(request){
            console.log(request);
            return request.json();
        })
        .then(function(object){
            console.log(object.data.length);
            var randomNum = Math.round(Math.random() * object.data.length)
            console.log(randomNum);
            console.log(object);
            let picurl = object.data[randomNum].images.fixed_height_downsampled.url
            $("body").append("<img src=" + picurl + ">")
            console.log(picurl);
        })
});

