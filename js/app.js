// jQuery active 

    
// global variable that stores pokemon
    let pokemon = "";
// on click function, or search result thingy goes here 
// Currently set up as function to be called for testing purposes
// Will need to be on-click function that eventually tags to search bar
$(document).on("click", "#pokemon-input", function(event){
    // prevents page from refreshing
    event.preventDefault();
    // temporary DIV - this clears the div on every search
    $("#testDiv").empty();
    // this grabs the user input from the search bar
    let pokemon = $("#add-pokemon").val().trim();
    //  Linking Pokemon API here, calling NAME and SPRITE
    let nameURL = "https://pokeapi.co/api/v2/pokemon/" + pokemon 
    let pictureURL = "https://pokeapi.co/api/v2/pokemon-form/" + pokemon

    $.ajax({
        url: pictureURL, nameURL,
        method: "GET"
    })
    .then(function(response) {
        // name response from API, then appending name into result-name
        let name = response.name;
        console.log(name);
        // let pokeName 
        $(".result-name").append(name);
        // picture response from API, then appending into a img
        let picture = response.sprites.front_default;
        console.log(picture);
        // variable storying jQuery to HTML 
        let pokeImage = $("<img id=pokeImage>").attr("src", picture);
        // appends image to .result div
        $(".result").append(pokeImage);

    });
});
// if(pokemon['name'].toLowerCase().indexOf(stringInName.toLowerCase()) !== -1)