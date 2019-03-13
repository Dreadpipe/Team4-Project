// jQuery active 



    // Initialize PokeMania Firebase!  It's super effective!
    // var config = {
    //     apiKey: "AIzaSyBQn2tp8-NXzhWu5hcG8kxS6MAGDLkoCNE",
    //     authDomain: "pokemania.firebaseapp.com",
    //     databaseURL: "https://pokemania.firebaseio.com",
    //     projectId: "pokemania",
    //     storageBucket: "",
    //     messagingSenderId: "959234008264"
    //     };
        
    //     firebase.initializeApp(config);


    // Linking Pokemon API here, ONLY CALLING IMAGE

// on click function, or search result thingy goes here 
// Currently set up as function to be called for testing purposes
// Will need to be on-click function that eventually tags to search bar
function Pokemans() {

    //  Pokemon variable will need to be associated with grabbed HTML
    let pokemon = "articuno";
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

        let pokeName = $(".result-name").append(name);

        // picture response from API, then appending into a img
        let picture = response.sprites.front_default;
        console.log(picture);

        let pokeImage = $("<img>").attr("src", picture);
        $(".result").append(pokeImage);

    })  

};

Pokemans();
