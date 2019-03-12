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
    let queryURL = "https://pokeapi.co/api/v2/pokemon-form/" + pokemon
    

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
    .then(function(response) {

        let results = response.sprites.front_default;
        console.log(results)

    })  

};

Pokemans();
    