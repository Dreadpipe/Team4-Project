const data = [{
    "base_attack": 118,
    "base_defense": 111,
    "base_stamina": 128,
    "pokemon_id": 1,
    "pokemon_name": "Bulbasaur"
    },
    {
    "base_attack": 151,
    "base_defense": 143,
    "base_stamina": 155,
    "pokemon_id": 2,
    "pokemon_name": "Ivysaur"
    },
    {
    "base_attack": 198,
    "base_defense": 189,
    "base_stamina": 190,
    "pokemon_id": 3,
    "pokemon_name": "Venusaur"
    },
    {
    "base_attack": 116,
    "base_defense": 93,
    "base_stamina": 118,
    "pokemon_id": 4,
    "pokemon_name": "Charmander"
    },
    {
    "base_attack": 158,
    "base_defense": 126,
    "base_stamina": 151,
    "pokemon_id": 5,
    "pokemon_name": "Charmeleon"
    },
    {
    "base_attack": 223,
    "base_defense": 173,
    "base_stamina": 186,
    "pokemon_id": 6,
    "pokemon_name": "Charizard"
    },
    {
    "base_attack": 94,
    "base_defense": 121,
    "base_stamina": 127,
    "pokemon_id": 7,
    "pokemon_name": "Squirtle"
    },
    {
    "base_attack": 126,
    "base_defense": 155,
    "base_stamina": 153,
    "pokemon_id": 8,
    "pokemon_name": "Wartortle"
    },
    {
    "base_attack": 171,
    "base_defense": 207,
    "base_stamina": 188,
    "pokemon_id": 9,
    "pokemon_name": "Blastoise"
    },
    {
    "base_attack": 55,
    "base_defense": 55,
    "base_stamina": 128,
    "pokemon_id": 10,
    "pokemon_name": "Caterpie"
    },
    {
    "base_attack": 45,
    "base_defense": 80,
    "base_stamina": 137,
    "pokemon_id": 11,
    "pokemon_name": "Metapod"
    }];
// const pokemonWeWant = pokemon
const pokemonWeWant = 'Bulbasaur';

let stats = {}

let matchList = data.filter(function(object){
    if (object.pokemon_name === pokemonWeWant) {
        console.log(object.base_attack);
        console.log(object.base_defense);
        console.log(object.base_stamina);
        stats.attack = object.base_attack
        stats.defense = object.base_defense
        stats.stamina = object.base_stamina
    };
    // return object.pokemon_name.includes('Char');

});



 const bulbasaurObject = matchList;

 console.log(stats);

// return this.base_attack;
// console.log(this.base_attack);


var result = [stats.attack, stats.defense, stats.stamina];

d3.select(".chart")
  .selectAll("div")
  .data(result)
    .enter()
    .append("div")
    .style("width", function(d) { return d + "px"; })
    .text(function(d) { return d; });

