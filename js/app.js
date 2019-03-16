// jQuery active 

// global variable that stores pokemon
    let pokemon = "";
    // makes page load first
    $(document).ready(function() {
// on click function, or search result thingy goes here 
// Currently set up as function to be called for testing purposes
// Will need to be on-click function that eventually tags to search bar
$(document).on("click", "#pokemon-input", function(event){
    // prevents page from refreshing
    event.preventDefault();
    // temporary DIV - this clears the div on every search
    $("#testDiv").empty();
    // this grabs the user input from the search bar
    let pokemonLower = $("#add-pokemon").val().trim().toLowerCase();
    //  Linking Pokemon API here, calling NAME and SPRITE
    let nameURL = "https://pokeapi.co/api/v2/pokemon/" + pokemonLower; 
    let pictureURL = "https://pokeapi.co/api/v2/pokemon-form/" + pokemonLower;

    $.ajax({
        url: pictureURL, nameURL,
        method: "GET"
    })
    .then(function(response) {
        // name response from API, then appending name into result-name
        let name = response.name;
        //NOTE: Trying to get name to return upper case
        name[0] = name[0].toUpperCase();
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
    // ends response function
    });
    // ends on-click event
    });
    // ends document ready function
});

// two variables caught by search engine:
// first variable - to lower case
// second variable - to upper case
// if(pokemon['name'].toLowerCase().indexOf(stringInName.toLowerCase()) !== -1)