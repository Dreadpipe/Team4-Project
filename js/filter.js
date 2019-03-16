//Ultimate Pokemon Object List
//Manually pulled from Pogoapi.net - an API which royally sucks
const data = [
  {
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
  },
  {
  "base_attack": 167,
  "base_defense": 137,
  "base_stamina": 155,
  "pokemon_id": 12,
  "pokemon_name": "Butterfree"
  },
  {
  "base_attack": 63,
  "base_defense": 50,
  "base_stamina": 120,
  "pokemon_id": 13,
  "pokemon_name": "Weedle"
  },
  {
  "base_attack": 46,
  "base_defense": 75,
  "base_stamina": 128,
  "pokemon_id": 14,
  "pokemon_name": "Kakuna"
  },
  {
  "base_attack": 169,
  "base_defense": 130,
  "base_stamina": 163,
  "pokemon_id": 15,
  "pokemon_name": "Beedrill"
  },
  {
  "base_attack": 85,
  "base_defense": 73,
  "base_stamina": 120,
  "pokemon_id": 16,
  "pokemon_name": "Pidgey"
  },
  {
  "base_attack": 117,
  "base_defense": 105,
  "base_stamina": 160,
  "pokemon_id": 17,
  "pokemon_name": "Pidgeotto"
  },
  {
  "base_attack": 166,
  "base_defense": 154,
  "base_stamina": 195,
  "pokemon_id": 18,
  "pokemon_name": "Pidgeot"
  },
  {
  "base_attack": 103,
  "base_defense": 70,
  "base_stamina": 102,
  "form": "Alola",
  "pokemon_id": 19,
  "pokemon_name": "Rattata"
  },
  {
  "base_attack": 103,
  "base_defense": 70,
  "base_stamina": 102,
  "form": "Normal",
  "pokemon_id": 19,
  "pokemon_name": "Rattata"
  },
  {
  "base_attack": 135,
  "base_defense": 154,
  "base_stamina": 181,
  "form": "Alola",
  "pokemon_id": 20,
  "pokemon_name": "Raticate"
  },
  {
  "base_attack": 161,
  "base_defense": 139,
  "base_stamina": 146,
  "form": "Normal",
  "pokemon_id": 20,
  "pokemon_name": "Raticate"
  },
  {
  "base_attack": 112,
  "base_defense": 60,
  "base_stamina": 120,
  "pokemon_id": 21,
  "pokemon_name": "Spearow"
  },
  {
  "base_attack": 182,
  "base_defense": 133,
  "base_stamina": 163,
  "pokemon_id": 22,
  "pokemon_name": "Fearow"
  },
  {
  "base_attack": 110,
  "base_defense": 97,
  "base_stamina": 111,
  "pokemon_id": 23,
  "pokemon_name": "Ekans"
  },
  {
  "base_attack": 167,
  "base_defense": 153,
  "base_stamina": 155,
  "pokemon_id": 24,
  "pokemon_name": "Arbok"
  },
  {
  "base_attack": 112,
  "base_defense": 96,
  "base_stamina": 111,
  "pokemon_id": 25,
  "pokemon_name": "Pikachu"
  },
  {
  "base_attack": 201,
  "base_defense": 154,
  "base_stamina": 155,
  "form": "Alola",
  "pokemon_id": 26,
  "pokemon_name": "Raichu"
  },
  {
  "base_attack": 193,
  "base_defense": 151,
  "base_stamina": 155,
  "form": "Normal",
  "pokemon_id": 26,
  "pokemon_name": "Raichu"
  },
  {
  "base_attack": 125,
  "base_defense": 129,
  "base_stamina": 137,
  "form": "Alola",
  "pokemon_id": 27,
  "pokemon_name": "Sandshrew"
  },
  {
  "base_attack": 126,
  "base_defense": 120,
  "base_stamina": 137,
  "form": "Normal",
  "pokemon_id": 27,
  "pokemon_name": "Sandshrew"
  },
  {
  "base_attack": 177,
  "base_defense": 195,
  "base_stamina": 181,
  "form": "Alola",
  "pokemon_id": 28,
  "pokemon_name": "Sandslash"
  },
  {
  "base_attack": 182,
  "base_defense": 175,
  "base_stamina": 181,
  "form": "Normal",
  "pokemon_id": 28,
  "pokemon_name": "Sandslash"
  },
  {
  "base_attack": 86,
  "base_defense": 89,
  "base_stamina": 146,
  "pokemon_id": 29,
  "pokemon_name": "Nidoran♀"
  },
  {
  "base_attack": 117,
  "base_defense": 120,
  "base_stamina": 172,
  "pokemon_id": 30,
  "pokemon_name": "Nidorina"
  },
  {
  "base_attack": 180,
  "base_defense": 173,
  "base_stamina": 207,
  "pokemon_id": 31,
  "pokemon_name": "Nidoqueen"
  },
  {
  "base_attack": 105,
  "base_defense": 76,
  "base_stamina": 130,
  "pokemon_id": 32,
  "pokemon_name": "Nidoran♂"
  },
  {
  "base_attack": 137,
  "base_defense": 111,
  "base_stamina": 156,
  "pokemon_id": 33,
  "pokemon_name": "Nidorino"
  },
  {
  "base_attack": 204,
  "base_defense": 156,
  "base_stamina": 191,
  "pokemon_id": 34,
  "pokemon_name": "Nidoking"
  },
  {
  "base_attack": 107,
  "base_defense": 108,
  "base_stamina": 172,
  "pokemon_id": 35,
  "pokemon_name": "Clefairy"
  },
  {
  "base_attack": 178,
  "base_defense": 162,
  "base_stamina": 216,
  "pokemon_id": 36,
  "pokemon_name": "Clefable"
  },
  {
  "base_attack": 96,
  "base_defense": 109,
  "base_stamina": 116,
  "form": "Alola",
  "pokemon_id": 37,
  "pokemon_name": "Vulpix"
  },
  {
  "base_attack": 96,
  "base_defense": 109,
  "base_stamina": 116,
  "form": "Normal",
  "pokemon_id": 37,
  "pokemon_name": "Vulpix"
  },
  {
  "base_attack": 170,
  "base_defense": 193,
  "base_stamina": 177,
  "form": "Alola",
  "pokemon_id": 38,
  "pokemon_name": "Ninetales"
  },
  {
  "base_attack": 169,
  "base_defense": 190,
  "base_stamina": 177,
  "form": "Normal",
  "pokemon_id": 38,
  "pokemon_name": "Ninetales"
  },
  {
  "base_attack": 80,
  "base_defense": 41,
  "base_stamina": 251,
  "pokemon_id": 39,
  "pokemon_name": "Jigglypuff"
  },
  {
  "base_attack": 156,
  "base_defense": 90,
  "base_stamina": 295,
  "pokemon_id": 40,
  "pokemon_name": "Wigglytuff"
  },
  {
  "base_attack": 83,
  "base_defense": 73,
  "base_stamina": 120,
  "pokemon_id": 41,
  "pokemon_name": "Zubat"
  },
  {
  "base_attack": 161,
  "base_defense": 150,
  "base_stamina": 181,
  "pokemon_id": 42,
  "pokemon_name": "Golbat"
  },
  {
  "base_attack": 131,
  "base_defense": 112,
  "base_stamina": 128,
  "pokemon_id": 43,
  "pokemon_name": "Oddish"
  },
  {
  "base_attack": 153,
  "base_defense": 136,
  "base_stamina": 155,
  "pokemon_id": 44,
  "pokemon_name": "Gloom"
  },
  {
  "base_attack": 202,
  "base_defense": 167,
  "base_stamina": 181,
  "pokemon_id": 45,
  "pokemon_name": "Vileplume"
  },
  {
  "base_attack": 121,
  "base_defense": 99,
  "base_stamina": 111,
  "pokemon_id": 46,
  "pokemon_name": "Paras"
  },
  {
  "base_attack": 165,
  "base_defense": 146,
  "base_stamina": 155,
  "pokemon_id": 47,
  "pokemon_name": "Parasect"
  },
  {
  "base_attack": 100,
  "base_defense": 100,
  "base_stamina": 155,
  "pokemon_id": 48,
  "pokemon_name": "Venonat"
  },
  {
  "base_attack": 179,
  "base_defense": 143,
  "base_stamina": 172,
  "pokemon_id": 49,
  "pokemon_name": "Venomoth"
  },
  {
  "base_attack": 108,
  "base_defense": 81,
  "base_stamina": 67,
  "form": "Alola",
  "pokemon_id": 50,
  "pokemon_name": "Diglett"
  },
  {
  "base_attack": 109,
  "base_defense": 78,
  "base_stamina": 67,
  "form": "Normal",
  "pokemon_id": 50,
  "pokemon_name": "Diglett"
  },
  {
  "base_attack": 201,
  "base_defense": 142,
  "base_stamina": 111,
  "form": "Alola",
  "pokemon_id": 51,
  "pokemon_name": "Dugtrio"
  },
  {
  "base_attack": 167,
  "base_defense": 136,
  "base_stamina": 111,
  "form": "Normal",
  "pokemon_id": 51,
  "pokemon_name": "Dugtrio"
  },
  {
  "base_attack": 99,
  "base_defense": 78,
  "base_stamina": 120,
  "form": "Alola",
  "pokemon_id": 52,
  "pokemon_name": "Meowth"
  },
  {
  "base_attack": 92,
  "base_defense": 78,
  "base_stamina": 120,
  "form": "Normal",
  "pokemon_id": 52,
  "pokemon_name": "Meowth"
  },
  {
  "base_attack": 158,
  "base_defense": 136,
  "base_stamina": 163,
  "form": "Alola",
  "pokemon_id": 53,
  "pokemon_name": "Persian"
  },
  {
  "base_attack": 150,
  "base_defense": 136,
  "base_stamina": 163,
  "form": "Normal",
  "pokemon_id": 53,
  "pokemon_name": "Persian"
  },
  {
  "base_attack": 122,
  "base_defense": 95,
  "base_stamina": 137,
  "pokemon_id": 54,
  "pokemon_name": "Psyduck"
  },
  {
  "base_attack": 191,
  "base_defense": 162,
  "base_stamina": 190,
  "pokemon_id": 55,
  "pokemon_name": "Golduck"
  },
  {
  "base_attack": 148,
  "base_defense": 82,
  "base_stamina": 120,
  "pokemon_id": 56,
  "pokemon_name": "Mankey"
  },
  {
  "base_attack": 207,
  "base_defense": 138,
  "base_stamina": 163,
  "pokemon_id": 57,
  "pokemon_name": "Primeape"
  },
  {
  "base_attack": 136,
  "base_defense": 93,
  "base_stamina": 146,
  "pokemon_id": 58,
  "pokemon_name": "Growlithe"
  },
  {
  "base_attack": 227,
  "base_defense": 166,
  "base_stamina": 207,
  "pokemon_id": 59,
  "pokemon_name": "Arcanine"
  },
  {
  "base_attack": 101,
  "base_defense": 82,
  "base_stamina": 120,
  "pokemon_id": 60,
  "pokemon_name": "Poliwag"
  },
  {
  "base_attack": 130,
  "base_defense": 123,
  "base_stamina": 163,
  "pokemon_id": 61,
  "pokemon_name": "Poliwhirl"
  },
  {
  "base_attack": 182,
  "base_defense": 184,
  "base_stamina": 207,
  "pokemon_id": 62,
  "pokemon_name": "Poliwrath"
  },
  {
  "base_attack": 195,
  "base_defense": 82,
  "base_stamina": 93,
  "pokemon_id": 63,
  "pokemon_name": "Abra"
  },
  {
  "base_attack": 232,
  "base_defense": 117,
  "base_stamina": 120,
  "pokemon_id": 64,
  "pokemon_name": "Kadabra"
  },
  {
  "base_attack": 271,
  "base_defense": 167,
  "base_stamina": 146,
  "pokemon_id": 65,
  "pokemon_name": "Alakazam"
  },
  {
  "base_attack": 137,
  "base_defense": 82,
  "base_stamina": 172,
  "pokemon_id": 66,
  "pokemon_name": "Machop"
  },
  {
  "base_attack": 177,
  "base_defense": 125,
  "base_stamina": 190,
  "pokemon_id": 67,
  "pokemon_name": "Machoke"
  },
  {
  "base_attack": 234,
  "base_defense": 159,
  "base_stamina": 207,
  "pokemon_id": 68,
  "pokemon_name": "Machamp"
  },
  {
  "base_attack": 139,
  "base_defense": 61,
  "base_stamina": 137,
  "pokemon_id": 69,
  "pokemon_name": "Bellsprout"
  },
  {
  "base_attack": 172,
  "base_defense": 92,
  "base_stamina": 163,
  "pokemon_id": 70,
  "pokemon_name": "Weepinbell"
  },
  {
  "base_attack": 207,
  "base_defense": 135,
  "base_stamina": 190,
  "pokemon_id": 71,
  "pokemon_name": "Victreebel"
  },
  {
  "base_attack": 97,
  "base_defense": 149,
  "base_stamina": 120,
  "pokemon_id": 72,
  "pokemon_name": "Tentacool"
  },
  {
  "base_attack": 166,
  "base_defense": 209,
  "base_stamina": 190,
  "pokemon_id": 73,
  "pokemon_name": "Tentacruel"
  },
  {
  "base_attack": 132,
  "base_defense": 132,
  "base_stamina": 120,
  "form": "Alola",
  "pokemon_id": 74,
  "pokemon_name": "Geodude"
  },
  {
  "base_attack": 132,
  "base_defense": 132,
  "base_stamina": 120,
  "form": "Normal",
  "pokemon_id": 74,
  "pokemon_name": "Geodude"
  },
  {
  "base_attack": 164,
  "base_defense": 164,
  "base_stamina": 146,
  "form": "Alola",
  "pokemon_id": 75,
  "pokemon_name": "Graveler"
  },
  {
  "base_attack": 164,
  "base_defense": 164,
  "base_stamina": 146,
  "form": "Normal",
  "pokemon_id": 75,
  "pokemon_name": "Graveler"
  },
  {
  "base_attack": 211,
  "base_defense": 198,
  "base_stamina": 190,
  "form": "Alola",
  "pokemon_id": 76,
  "pokemon_name": "Golem"
  },
  {
  "base_attack": 211,
  "base_defense": 198,
  "base_stamina": 190,
  "form": "Normal",
  "pokemon_id": 76,
  "pokemon_name": "Golem"
  },
  {
  "base_attack": 170,
  "base_defense": 127,
  "base_stamina": 137,
  "pokemon_id": 77,
  "pokemon_name": "Ponyta"
  },
  {
  "base_attack": 207,
  "base_defense": 162,
  "base_stamina": 163,
  "pokemon_id": 78,
  "pokemon_name": "Rapidash"
  },
  {
  "base_attack": 109,
  "base_defense": 98,
  "base_stamina": 207,
  "pokemon_id": 79,
  "pokemon_name": "Slowpoke"
  },
  {
  "base_attack": 177,
  "base_defense": 180,
  "base_stamina": 216,
  "pokemon_id": 80,
  "pokemon_name": "Slowbro"
  },
  {
  "base_attack": 165,
  "base_defense": 121,
  "base_stamina": 93,
  "pokemon_id": 81,
  "pokemon_name": "Magnemite"
  },
  {
  "base_attack": 223,
  "base_defense": 169,
  "base_stamina": 137,
  "pokemon_id": 82,
  "pokemon_name": "Magneton"
  },
  {
  "base_attack": 124,
  "base_defense": 115,
  "base_stamina": 141,
  "pokemon_id": 83,
  "pokemon_name": "Farfetch’d"
  },
  {
  "base_attack": 158,
  "base_defense": 83,
  "base_stamina": 111,
  "pokemon_id": 84,
  "pokemon_name": "Doduo"
  },
  {
  "base_attack": 218,
  "base_defense": 140,
  "base_stamina": 155,
  "pokemon_id": 85,
  "pokemon_name": "Dodrio"
  },
  {
  "base_attack": 85,
  "base_defense": 121,
  "base_stamina": 163,
  "pokemon_id": 86,
  "pokemon_name": "Seel"
  },
  {
  "base_attack": 139,
  "base_defense": 177,
  "base_stamina": 207,
  "pokemon_id": 87,
  "pokemon_name": "Dewgong"
  },
  {
  "base_attack": 135,
  "base_defense": 90,
  "base_stamina": 190,
  "form": "Alola",
  "pokemon_id": 88,
  "pokemon_name": "Grimer"
  },
  {
  "base_attack": 135,
  "base_defense": 90,
  "base_stamina": 190,
  "form": "Normal",
  "pokemon_id": 88,
  "pokemon_name": "Grimer"
  },
  {
  "base_attack": 190,
  "base_defense": 172,
  "base_stamina": 233,
  "form": "Alola",
  "pokemon_id": 89,
  "pokemon_name": "Muk"
  },
  {
  "base_attack": 190,
  "base_defense": 172,
  "base_stamina": 233,
  "form": "Normal",
  "pokemon_id": 89,
  "pokemon_name": "Muk"
  },
  {
  "base_attack": 116,
  "base_defense": 134,
  "base_stamina": 102,
  "pokemon_id": 90,
  "pokemon_name": "Shellder"
  },
  {
  "base_attack": 186,
  "base_defense": 256,
  "base_stamina": 137,
  "pokemon_id": 91,
  "pokemon_name": "Cloyster"
  },
  {
  "base_attack": 186,
  "base_defense": 67,
  "base_stamina": 102,
  "pokemon_id": 92,
  "pokemon_name": "Gastly"
  },
  {
  "base_attack": 223,
  "base_defense": 107,
  "base_stamina": 128,
  "pokemon_id": 93,
  "pokemon_name": "Haunter"
  },
  {
  "base_attack": 261,
  "base_defense": 149,
  "base_stamina": 155,
  "pokemon_id": 94,
  "pokemon_name": "Gengar"
  },
  {
  "base_attack": 85,
  "base_defense": 232,
  "base_stamina": 111,
  "pokemon_id": 95,
  "pokemon_name": "Onix"
  },
  {
  "base_attack": 89,
  "base_defense": 136,
  "base_stamina": 155,
  "pokemon_id": 96,
  "pokemon_name": "Drowzee"
  },
  {
  "base_attack": 144,
  "base_defense": 193,
  "base_stamina": 198,
  "pokemon_id": 97,
  "pokemon_name": "Hypno"
  },
  {
  "base_attack": 181,
  "base_defense": 124,
  "base_stamina": 102,
  "pokemon_id": 98,
  "pokemon_name": "Krabby"
  },
  {
  "base_attack": 240,
  "base_defense": 181,
  "base_stamina": 146,
  "pokemon_id": 99,
  "pokemon_name": "Kingler"
  },
  {
  "base_attack": 109,
  "base_defense": 111,
  "base_stamina": 120,
  "pokemon_id": 100,
  "pokemon_name": "Voltorb"
  },
  {
  "base_attack": 173,
  "base_defense": 173,
  "base_stamina": 155,
  "pokemon_id": 101,
  "pokemon_name": "Electrode"
  },
  {
  "base_attack": 107,
  "base_defense": 125,
  "base_stamina": 155,
  "pokemon_id": 102,
  "pokemon_name": "Exeggcute"
  },
  {
  "base_attack": 230,
  "base_defense": 153,
  "base_stamina": 216,
  "form": "Alola",
  "pokemon_id": 103,
  "pokemon_name": "Exeggutor"
  },
  {
  "base_attack": 233,
  "base_defense": 149,
  "base_stamina": 216,
  "form": "Normal",
  "pokemon_id": 103,
  "pokemon_name": "Exeggutor"
  },
  {
  "base_attack": 90,
  "base_defense": 144,
  "base_stamina": 137,
  "pokemon_id": 104,
  "pokemon_name": "Cubone"
  },
  {
  "base_attack": 144,
  "base_defense": 186,
  "base_stamina": 155,
  "form": "Alola",
  "pokemon_id": 105,
  "pokemon_name": "Marowak"
  },
  {
  "base_attack": 144,
  "base_defense": 186,
  "base_stamina": 155,
  "form": "Normal",
  "pokemon_id": 105,
  "pokemon_name": "Marowak"
  },
  {
  "base_attack": 224,
  "base_defense": 181,
  "base_stamina": 137,
  "pokemon_id": 106,
  "pokemon_name": "Hitmonlee"
  },
  {
  "base_attack": 193,
  "base_defense": 197,
  "base_stamina": 137,
  "pokemon_id": 107,
  "pokemon_name": "Hitmonchan"
  },
  {
  "base_attack": 108,
  "base_defense": 137,
  "base_stamina": 207,
  "pokemon_id": 108,
  "pokemon_name": "Lickitung"
  },
  {
  "base_attack": 119,
  "base_defense": 141,
  "base_stamina": 120,
  "pokemon_id": 109,
  "pokemon_name": "Koffing"
  },
  {
  "base_attack": 174,
  "base_defense": 197,
  "base_stamina": 163,
  "pokemon_id": 110,
  "pokemon_name": "Weezing"
  },
  {
  "base_attack": 140,
  "base_defense": 127,
  "base_stamina": 190,
  "pokemon_id": 111,
  "pokemon_name": "Rhyhorn"
  },
  {
  "base_attack": 222,
  "base_defense": 171,
  "base_stamina": 233,
  "pokemon_id": 112,
  "pokemon_name": "Rhydon"
  },
  {
  "base_attack": 60,
  "base_defense": 128,
  "base_stamina": 487,
  "pokemon_id": 113,
  "pokemon_name": "Chansey"
  },
  {
  "base_attack": 183,
  "base_defense": 169,
  "base_stamina": 163,
  "pokemon_id": 114,
  "pokemon_name": "Tangela"
  },
  {
  "base_attack": 181,
  "base_defense": 165,
  "base_stamina": 233,
  "pokemon_id": 115,
  "pokemon_name": "Kangaskhan"
  },
  {
  "base_attack": 129,
  "base_defense": 103,
  "base_stamina": 102,
  "pokemon_id": 116,
  "pokemon_name": "Horsea"
  },
  {
  "base_attack": 187,
  "base_defense": 156,
  "base_stamina": 146,
  "pokemon_id": 117,
  "pokemon_name": "Seadra"
  },
  {
  "base_attack": 123,
  "base_defense": 110,
  "base_stamina": 128,
  "pokemon_id": 118,
  "pokemon_name": "Goldeen"
  },
  {
  "base_attack": 175,
  "base_defense": 147,
  "base_stamina": 190,
  "pokemon_id": 119,
  "pokemon_name": "Seaking"
  },
  {
  "base_attack": 137,
  "base_defense": 112,
  "base_stamina": 102,
  "pokemon_id": 120,
  "pokemon_name": "Staryu"
  },
  {
  "base_attack": 210,
  "base_defense": 184,
  "base_stamina": 155,
  "pokemon_id": 121,
  "pokemon_name": "Starmie"
  },
  {
  "base_attack": 192,
  "base_defense": 205,
  "base_stamina": 120,
  "pokemon_id": 122,
  "pokemon_name": "Mr. Mime"
  },
  {
  "base_attack": 218,
  "base_defense": 170,
  "base_stamina": 172,
  "pokemon_id": 123,
  "pokemon_name": "Scyther"
  },
  {
  "base_attack": 223,
  "base_defense": 151,
  "base_stamina": 163,
  "pokemon_id": 124,
  "pokemon_name": "Jynx"
  },
  {
  "base_attack": 198,
  "base_defense": 158,
  "base_stamina": 163,
  "pokemon_id": 125,
  "pokemon_name": "Electabuzz"
  },
  {
  "base_attack": 206,
  "base_defense": 154,
  "base_stamina": 163,
  "pokemon_id": 126,
  "pokemon_name": "Magmar"
  },
  {
  "base_attack": 238,
  "base_defense": 182,
  "base_stamina": 163,
  "pokemon_id": 127,
  "pokemon_name": "Pinsir"
  },
  {
  "base_attack": 198,
  "base_defense": 183,
  "base_stamina": 181,
  "pokemon_id": 128,
  "pokemon_name": "Tauros"
  },
  {
  "base_attack": 29,
  "base_defense": 85,
  "base_stamina": 85,
  "pokemon_id": 129,
  "pokemon_name": "Magikarp"
  },
  {
  "base_attack": 237,
  "base_defense": 186,
  "base_stamina": 216,
  "pokemon_id": 130,
  "pokemon_name": "Gyarados"
  },
  {
  "base_attack": 165,
  "base_defense": 174,
  "base_stamina": 277,
  "pokemon_id": 131,
  "pokemon_name": "Lapras"
  },
  {
  "base_attack": 91,
  "base_defense": 91,
  "base_stamina": 134,
  "pokemon_id": 132,
  "pokemon_name": "Ditto"
  },
  {
  "base_attack": 104,
  "base_defense": 114,
  "base_stamina": 146,
  "pokemon_id": 133,
  "pokemon_name": "Eevee"
  },
  {
  "base_attack": 205,
  "base_defense": 161,
  "base_stamina": 277,
  "pokemon_id": 134,
  "pokemon_name": "Vaporeon"
  },
  {
  "base_attack": 232,
  "base_defense": 182,
  "base_stamina": 163,
  "pokemon_id": 135,
  "pokemon_name": "Jolteon"
  },
  {
  "base_attack": 246,
  "base_defense": 179,
  "base_stamina": 163,
  "pokemon_id": 136,
  "pokemon_name": "Flareon"
  },
  {
  "base_attack": 153,
  "base_defense": 136,
  "base_stamina": 163,
  "pokemon_id": 137,
  "pokemon_name": "Porygon"
  },
  {
  "base_attack": 155,
  "base_defense": 153,
  "base_stamina": 111,
  "pokemon_id": 138,
  "pokemon_name": "Omanyte"
  },
  {
  "base_attack": 207,
  "base_defense": 201,
  "base_stamina": 172,
  "pokemon_id": 139,
  "pokemon_name": "Omastar"
  },
  {
  "base_attack": 148,
  "base_defense": 140,
  "base_stamina": 102,
  "pokemon_id": 140,
  "pokemon_name": "Kabuto"
  },
  {
  "base_attack": 220,
  "base_defense": 186,
  "base_stamina": 155,
  "pokemon_id": 141,
  "pokemon_name": "Kabutops"
  },
  {
  "base_attack": 221,
  "base_defense": 159,
  "base_stamina": 190,
  "pokemon_id": 142,
  "pokemon_name": "Aerodactyl"
  },
  {
  "base_attack": 190,
  "base_defense": 169,
  "base_stamina": 330,
  "pokemon_id": 143,
  "pokemon_name": "Snorlax"
  },
  {
  "base_attack": 192,
  "base_defense": 236,
  "base_stamina": 207,
  "pokemon_id": 144,
  "pokemon_name": "Articuno"
  },
  {
  "base_attack": 253,
  "base_defense": 185,
  "base_stamina": 207,
  "pokemon_id": 145,
  "pokemon_name": "Zapdos"
  },
  {
  "base_attack": 251,
  "base_defense": 181,
  "base_stamina": 207,
  "pokemon_id": 146,
  "pokemon_name": "Moltres"
  },
  {
  "base_attack": 119,
  "base_defense": 91,
  "base_stamina": 121,
  "pokemon_id": 147,
  "pokemon_name": "Dratini"
  },
  {
  "base_attack": 163,
  "base_defense": 135,
  "base_stamina": 156,
  "pokemon_id": 148,
  "pokemon_name": "Dragonair"
  },
  {
  "base_attack": 263,
  "base_defense": 198,
  "base_stamina": 209,
  "pokemon_id": 149,
  "pokemon_name": "Dragonite"
  },
  {
  "base_attack": 300,
  "base_defense": 182,
  "base_stamina": 214,
  "pokemon_id": 150,
  "pokemon_name": "Mewtwo"
  },
  {
  "base_attack": 210,
  "base_defense": 210,
  "base_stamina": 225,
  "pokemon_id": 151,
  "pokemon_name": "Mew"
  },
  {
  "base_attack": 92,
  "base_defense": 122,
  "base_stamina": 128,
  "pokemon_id": 152,
  "pokemon_name": "Chikorita"
  },
  {
  "base_attack": 122,
  "base_defense": 155,
  "base_stamina": 155,
  "pokemon_id": 153,
  "pokemon_name": "Bayleef"
  },
  {
  "base_attack": 168,
  "base_defense": 202,
  "base_stamina": 190,
  "pokemon_id": 154,
  "pokemon_name": "Meganium"
  },
  {
  "base_attack": 116,
  "base_defense": 93,
  "base_stamina": 118,
  "pokemon_id": 155,
  "pokemon_name": "Cyndaquil"
  },
  {
  "base_attack": 158,
  "base_defense": 126,
  "base_stamina": 151,
  "pokemon_id": 156,
  "pokemon_name": "Quilava"
  },
  {
  "base_attack": 223,
  "base_defense": 173,
  "base_stamina": 186,
  "pokemon_id": 157,
  "pokemon_name": "Typhlosion"
  },
  {
  "base_attack": 117,
  "base_defense": 109,
  "base_stamina": 137,
  "pokemon_id": 158,
  "pokemon_name": "Totodile"
  },
  {
  "base_attack": 150,
  "base_defense": 142,
  "base_stamina": 163,
  "pokemon_id": 159,
  "pokemon_name": "Croconaw"
  },
  {
  "base_attack": 205,
  "base_defense": 188,
  "base_stamina": 198,
  "pokemon_id": 160,
  "pokemon_name": "Feraligatr"
  },
  {
  "base_attack": 79,
  "base_defense": 73,
  "base_stamina": 111,
  "pokemon_id": 161,
  "pokemon_name": "Sentret"
  },
  {
  "base_attack": 148,
  "base_defense": 125,
  "base_stamina": 198,
  "pokemon_id": 162,
  "pokemon_name": "Furret"
  },
  {
  "base_attack": 67,
  "base_defense": 88,
  "base_stamina": 155,
  "pokemon_id": 163,
  "pokemon_name": "Hoothoot"
  },
  {
  "base_attack": 145,
  "base_defense": 156,
  "base_stamina": 225,
  "pokemon_id": 164,
  "pokemon_name": "Noctowl"
  },
  {
  "base_attack": 72,
  "base_defense": 118,
  "base_stamina": 120,
  "pokemon_id": 165,
  "pokemon_name": "Ledyba"
  },
  {
  "base_attack": 107,
  "base_defense": 179,
  "base_stamina": 146,
  "pokemon_id": 166,
  "pokemon_name": "Ledian"
  },
  {
  "base_attack": 105,
  "base_defense": 73,
  "base_stamina": 120,
  "pokemon_id": 167,
  "pokemon_name": "Spinarak"
  },
  {
  "base_attack": 161,
  "base_defense": 124,
  "base_stamina": 172,
  "pokemon_id": 168,
  "pokemon_name": "Ariados"
  },
  {
  "base_attack": 194,
  "base_defense": 178,
  "base_stamina": 198,
  "pokemon_id": 169,
  "pokemon_name": "Crobat"
  },
  {
  "base_attack": 106,
  "base_defense": 97,
  "base_stamina": 181,
  "pokemon_id": 170,
  "pokemon_name": "Chinchou"
  },
  {
  "base_attack": 146,
  "base_defense": 137,
  "base_stamina": 268,
  "pokemon_id": 171,
  "pokemon_name": "Lanturn"
  },
  {
  "base_attack": 77,
  "base_defense": 53,
  "base_stamina": 85,
  "pokemon_id": 172,
  "pokemon_name": "Pichu"
  },
  {
  "base_attack": 75,
  "base_defense": 79,
  "base_stamina": 137,
  "pokemon_id": 173,
  "pokemon_name": "Cleffa"
  },
  {
  "base_attack": 69,
  "base_defense": 32,
  "base_stamina": 207,
  "pokemon_id": 174,
  "pokemon_name": "Igglybuff"
  },
  {
  "base_attack": 67,
  "base_defense": 116,
  "base_stamina": 111,
  "pokemon_id": 175,
  "pokemon_name": "Togepi"
  },
  {
  "base_attack": 139,
  "base_defense": 181,
  "base_stamina": 146,
  "pokemon_id": 176,
  "pokemon_name": "Togetic"
  },
  {
  "base_attack": 134,
  "base_defense": 89,
  "base_stamina": 120,
  "pokemon_id": 177,
  "pokemon_name": "Natu"
  },
  {
  "base_attack": 192,
  "base_defense": 146,
  "base_stamina": 163,
  "pokemon_id": 178,
  "pokemon_name": "Xatu"
  },
  {
  "base_attack": 114,
  "base_defense": 79,
  "base_stamina": 146,
  "pokemon_id": 179,
  "pokemon_name": "Mareep"
  },
  {
  "base_attack": 145,
  "base_defense": 109,
  "base_stamina": 172,
  "pokemon_id": 180,
  "pokemon_name": "Flaaffy"
  },
  {
  "base_attack": 211,
  "base_defense": 169,
  "base_stamina": 207,
  "pokemon_id": 181,
  "pokemon_name": "Ampharos"
  },
  {
  "base_attack": 169,
  "base_defense": 186,
  "base_stamina": 181,
  "pokemon_id": 182,
  "pokemon_name": "Bellossom"
  },
  {
  "base_attack": 37,
  "base_defense": 93,
  "base_stamina": 172,
  "pokemon_id": 183,
  "pokemon_name": "Marill"
  },
  {
  "base_attack": 112,
  "base_defense": 152,
  "base_stamina": 225,
  "pokemon_id": 184,
  "pokemon_name": "Azumarill"
  },
  {
  "base_attack": 167,
  "base_defense": 176,
  "base_stamina": 172,
  "pokemon_id": 185,
  "pokemon_name": "Sudowoodo"
  },
  {
  "base_attack": 174,
  "base_defense": 179,
  "base_stamina": 207,
  "pokemon_id": 186,
  "pokemon_name": "Politoed"
  },
  {
  "base_attack": 67,
  "base_defense": 94,
  "base_stamina": 111,
  "pokemon_id": 187,
  "pokemon_name": "Hoppip"
  },
  {
  "base_attack": 91,
  "base_defense": 120,
  "base_stamina": 146,
  "pokemon_id": 188,
  "pokemon_name": "Skiploom"
  },
  {
  "base_attack": 118,
  "base_defense": 183,
  "base_stamina": 181,
  "pokemon_id": 189,
  "pokemon_name": "Jumpluff"
  },
  {
  "base_attack": 136,
  "base_defense": 112,
  "base_stamina": 146,
  "pokemon_id": 190,
  "pokemon_name": "Aipom"
  },
  {
  "base_attack": 55,
  "base_defense": 55,
  "base_stamina": 102,
  "pokemon_id": 191,
  "pokemon_name": "Sunkern"
  },
  {
  "base_attack": 185,
  "base_defense": 135,
  "base_stamina": 181,
  "pokemon_id": 192,
  "pokemon_name": "Sunflora"
  },
  {
  "base_attack": 154,
  "base_defense": 94,
  "base_stamina": 163,
  "pokemon_id": 193,
  "pokemon_name": "Yanma"
  },
  {
  "base_attack": 75,
  "base_defense": 66,
  "base_stamina": 146,
  "pokemon_id": 194,
  "pokemon_name": "Wooper"
  },
  {
  "base_attack": 152,
  "base_defense": 143,
  "base_stamina": 216,
  "pokemon_id": 195,
  "pokemon_name": "Quagsire"
  },
  {
  "base_attack": 261,
  "base_defense": 175,
  "base_stamina": 163,
  "pokemon_id": 196,
  "pokemon_name": "Espeon"
  },
  {
  "base_attack": 126,
  "base_defense": 240,
  "base_stamina": 216,
  "pokemon_id": 197,
  "pokemon_name": "Umbreon"
  },
  {
  "base_attack": 175,
  "base_defense": 87,
  "base_stamina": 155,
  "pokemon_id": 198,
  "pokemon_name": "Murkrow"
  },
  {
  "base_attack": 177,
  "base_defense": 180,
  "base_stamina": 216,
  "pokemon_id": 199,
  "pokemon_name": "Slowking"
  },
  {
  "base_attack": 167,
  "base_defense": 154,
  "base_stamina": 155,
  "pokemon_id": 200,
  "pokemon_name": "Misdreavus"
  },
  {
  "base_attack": 136,
  "base_defense": 91,
  "base_stamina": 134,
  "pokemon_id": 201,
  "pokemon_name": "Unown"
  },
  {
  "base_attack": 60,
  "base_defense": 106,
  "base_stamina": 382,
  "pokemon_id": 202,
  "pokemon_name": "Wobbuffet"
  },
  {
  "base_attack": 182,
  "base_defense": 133,
  "base_stamina": 172,
  "pokemon_id": 203,
  "pokemon_name": "Girafarig"
  },
  {
  "base_attack": 108,
  "base_defense": 122,
  "base_stamina": 137,
  "pokemon_id": 204,
  "pokemon_name": "Pineco"
  },
  {
  "base_attack": 161,
  "base_defense": 205,
  "base_stamina": 181,
  "pokemon_id": 205,
  "pokemon_name": "Forretress"
  },
  {
  "base_attack": 131,
  "base_defense": 128,
  "base_stamina": 225,
  "pokemon_id": 206,
  "pokemon_name": "Dunsparce"
  },
  {
  "base_attack": 143,
  "base_defense": 184,
  "base_stamina": 163,
  "pokemon_id": 207,
  "pokemon_name": "Gligar"
  },
  {
  "base_attack": 148,
  "base_defense": 272,
  "base_stamina": 181,
  "pokemon_id": 208,
  "pokemon_name": "Steelix"
  },
  {
  "base_attack": 137,
  "base_defense": 85,
  "base_stamina": 155,
  "pokemon_id": 209,
  "pokemon_name": "Snubbull"
  },
  {
  "base_attack": 212,
  "base_defense": 131,
  "base_stamina": 207,
  "pokemon_id": 210,
  "pokemon_name": "Granbull"
  },
  {
  "base_attack": 184,
  "base_defense": 138,
  "base_stamina": 163,
  "pokemon_id": 211,
  "pokemon_name": "Qwilfish"
  },
  {
  "base_attack": 236,
  "base_defense": 181,
  "base_stamina": 172,
  "pokemon_id": 212,
  "pokemon_name": "Scizor"
  },
  {
  "base_attack": 17,
  "base_defense": 396,
  "base_stamina": 85,
  "pokemon_id": 213,
  "pokemon_name": "Shuckle"
  },
  {
  "base_attack": 234,
  "base_defense": 179,
  "base_stamina": 190,
  "pokemon_id": 214,
  "pokemon_name": "Heracross"
  },
  {
  "base_attack": 189,
  "base_defense": 146,
  "base_stamina": 146,
  "pokemon_id": 215,
  "pokemon_name": "Sneasel"
  },
  {
  "base_attack": 142,
  "base_defense": 93,
  "base_stamina": 155,
  "pokemon_id": 216,
  "pokemon_name": "Teddiursa"
  },
  {
  "base_attack": 236,
  "base_defense": 144,
  "base_stamina": 207,
  "pokemon_id": 217,
  "pokemon_name": "Ursaring"
  },
  {
  "base_attack": 118,
  "base_defense": 71,
  "base_stamina": 120,
  "pokemon_id": 218,
  "pokemon_name": "Slugma"
  },
  {
  "base_attack": 139,
  "base_defense": 191,
  "base_stamina": 137,
  "pokemon_id": 219,
  "pokemon_name": "Magcargo"
  },
  {
  "base_attack": 90,
  "base_defense": 69,
  "base_stamina": 137,
  "pokemon_id": 220,
  "pokemon_name": "Swinub"
  },
  {
  "base_attack": 181,
  "base_defense": 138,
  "base_stamina": 225,
  "pokemon_id": 221,
  "pokemon_name": "Piloswine"
  },
  {
  "base_attack": 118,
  "base_defense": 156,
  "base_stamina": 146,
  "pokemon_id": 222,
  "pokemon_name": "Corsola"
  },
  {
  "base_attack": 127,
  "base_defense": 69,
  "base_stamina": 111,
  "pokemon_id": 223,
  "pokemon_name": "Remoraid"
  },
  {
  "base_attack": 197,
  "base_defense": 141,
  "base_stamina": 181,
  "pokemon_id": 224,
  "pokemon_name": "Octillery"
  },
  {
  "base_attack": 128,
  "base_defense": 90,
  "base_stamina": 128,
  "pokemon_id": 225,
  "pokemon_name": "Delibird"
  },
  {
  "base_attack": 148,
  "base_defense": 226,
  "base_stamina": 163,
  "pokemon_id": 226,
  "pokemon_name": "Mantine"
  },
  {
  "base_attack": 148,
  "base_defense": 226,
  "base_stamina": 163,
  "pokemon_id": 227,
  "pokemon_name": "Skarmory"
  },
  {
  "base_attack": 152,
  "base_defense": 83,
  "base_stamina": 128,
  "pokemon_id": 228,
  "pokemon_name": "Houndour"
  },
  {
  "base_attack": 224,
  "base_defense": 144,
  "base_stamina": 181,
  "pokemon_id": 229,
  "pokemon_name": "Houndoom"
  },
  {
  "base_attack": 194,
  "base_defense": 194,
  "base_stamina": 181,
  "pokemon_id": 230,
  "pokemon_name": "Kingdra"
  },
  {
  "base_attack": 107,
  "base_defense": 98,
  "base_stamina": 207,
  "pokemon_id": 231,
  "pokemon_name": "Phanpy"
  },
  {
  "base_attack": 214,
  "base_defense": 185,
  "base_stamina": 207,
  "pokemon_id": 232,
  "pokemon_name": "Donphan"
  },
  {
  "base_attack": 198,
  "base_defense": 180,
  "base_stamina": 198,
  "pokemon_id": 233,
  "pokemon_name": "Porygon2"
  },
  {
  "base_attack": 192,
  "base_defense": 131,
  "base_stamina": 177,
  "pokemon_id": 234,
  "pokemon_name": "Stantler"
  },
  {
  "base_attack": 40,
  "base_defense": 83,
  "base_stamina": 146,
  "pokemon_id": 235,
  "pokemon_name": "Smeargle"
  },
  {
  "base_attack": 64,
  "base_defense": 64,
  "base_stamina": 111,
  "pokemon_id": 236,
  "pokemon_name": "Tyrogue"
  },
  {
  "base_attack": 173,
  "base_defense": 207,
  "base_stamina": 137,
  "pokemon_id": 237,
  "pokemon_name": "Hitmontop"
  },
  {
  "base_attack": 153,
  "base_defense": 91,
  "base_stamina": 128,
  "pokemon_id": 238,
  "pokemon_name": "Smoochum"
  },
  {
  "base_attack": 135,
  "base_defense": 101,
  "base_stamina": 128,
  "pokemon_id": 239,
  "pokemon_name": "Elekid"
  },
  {
  "base_attack": 151,
  "base_defense": 99,
  "base_stamina": 128,
  "pokemon_id": 240,
  "pokemon_name": "Magby"
  },
  {
  "base_attack": 157,
  "base_defense": 193,
  "base_stamina": 216,
  "pokemon_id": 241,
  "pokemon_name": "Miltank"
  },
  {
  "base_attack": 129,
  "base_defense": 169,
  "base_stamina": 496,
  "pokemon_id": 242,
  "pokemon_name": "Blissey"
  },
  {
  "base_attack": 241,
  "base_defense": 195,
  "base_stamina": 207,
  "pokemon_id": 243,
  "pokemon_name": "Raikou"
  },
  {
  "base_attack": 235,
  "base_defense": 171,
  "base_stamina": 251,
  "pokemon_id": 244,
  "pokemon_name": "Entei"
  },
  {
  "base_attack": 180,
  "base_defense": 235,
  "base_stamina": 225,
  "pokemon_id": 245,
  "pokemon_name": "Suicune"
  },
  {
  "base_attack": 115,
  "base_defense": 93,
  "base_stamina": 137,
  "pokemon_id": 246,
  "pokemon_name": "Larvitar"
  },
  {
  "base_attack": 155,
  "base_defense": 133,
  "base_stamina": 172,
  "pokemon_id": 247,
  "pokemon_name": "Pupitar"
  },
  {
  "base_attack": 251,
  "base_defense": 207,
  "base_stamina": 225,
  "pokemon_id": 248,
  "pokemon_name": "Tyranitar"
  },
  {
  "base_attack": 193,
  "base_defense": 310,
  "base_stamina": 235,
  "pokemon_id": 249,
  "pokemon_name": "Lugia"
  },
  {
  "base_attack": 239,
  "base_defense": 244,
  "base_stamina": 214,
  "pokemon_id": 250,
  "pokemon_name": "Ho-Oh"
  },
  {
  "base_attack": 210,
  "base_defense": 210,
  "base_stamina": 225,
  "pokemon_id": 251,
  "pokemon_name": "Celebi"
  },
  {
  "base_attack": 124,
  "base_defense": 94,
  "base_stamina": 120,
  "pokemon_id": 252,
  "pokemon_name": "Treecko"
  },
  {
  "base_attack": 172,
  "base_defense": 120,
  "base_stamina": 137,
  "pokemon_id": 253,
  "pokemon_name": "Grovyle"
  },
  {
  "base_attack": 223,
  "base_defense": 169,
  "base_stamina": 172,
  "pokemon_id": 254,
  "pokemon_name": "Sceptile"
  },
  {
  "base_attack": 130,
  "base_defense": 87,
  "base_stamina": 128,
  "pokemon_id": 255,
  "pokemon_name": "Torchic"
  },
  {
  "base_attack": 163,
  "base_defense": 115,
  "base_stamina": 155,
  "pokemon_id": 256,
  "pokemon_name": "Combusken"
  },
  {
  "base_attack": 240,
  "base_defense": 141,
  "base_stamina": 190,
  "pokemon_id": 257,
  "pokemon_name": "Blaziken"
  },
  {
  "base_attack": 126,
  "base_defense": 93,
  "base_stamina": 137,
  "pokemon_id": 258,
  "pokemon_name": "Mudkip"
  },
  {
  "base_attack": 156,
  "base_defense": 133,
  "base_stamina": 172,
  "pokemon_id": 259,
  "pokemon_name": "Marshtomp"
  },
  {
  "base_attack": 208,
  "base_defense": 175,
  "base_stamina": 225,
  "pokemon_id": 260,
  "pokemon_name": "Swampert"
  },
  {
  "base_attack": 96,
  "base_defense": 61,
  "base_stamina": 111,
  "pokemon_id": 261,
  "pokemon_name": "Poochyena"
  },
  {
  "base_attack": 171,
  "base_defense": 132,
  "base_stamina": 172,
  "pokemon_id": 262,
  "pokemon_name": "Mightyena"
  },
  {
  "base_attack": 58,
  "base_defense": 80,
  "base_stamina": 116,
  "pokemon_id": 263,
  "pokemon_name": "Zigzagoon"
  },
  {
  "base_attack": 142,
  "base_defense": 128,
  "base_stamina": 186,
  "pokemon_id": 264,
  "pokemon_name": "Linoone"
  },
  {
  "base_attack": 75,
  "base_defense": 59,
  "base_stamina": 128,
  "pokemon_id": 265,
  "pokemon_name": "Wurmple"
  },
  {
  "base_attack": 60,
  "base_defense": 77,
  "base_stamina": 137,
  "pokemon_id": 266,
  "pokemon_name": "Silcoon"
  },
  {
  "base_attack": 189,
  "base_defense": 98,
  "base_stamina": 155,
  "pokemon_id": 267,
  "pokemon_name": "Beautifly"
  },
  {
  "base_attack": 60,
  "base_defense": 77,
  "base_stamina": 137,
  "pokemon_id": 268,
  "pokemon_name": "Cascoon"
  },
  {
  "base_attack": 98,
  "base_defense": 162,
  "base_stamina": 155,
  "pokemon_id": 269,
  "pokemon_name": "Dustox"
  },
  {
  "base_attack": 71,
  "base_defense": 77,
  "base_stamina": 120,
  "pokemon_id": 270,
  "pokemon_name": "Lotad"
  },
  {
  "base_attack": 112,
  "base_defense": 119,
  "base_stamina": 155,
  "pokemon_id": 271,
  "pokemon_name": "Lombre"
  },
  {
  "base_attack": 173,
  "base_defense": 176,
  "base_stamina": 190,
  "pokemon_id": 272,
  "pokemon_name": "Ludicolo"
  },
  {
  "base_attack": 71,
  "base_defense": 77,
  "base_stamina": 120,
  "pokemon_id": 273,
  "pokemon_name": "Seedot"
  },
  {
  "base_attack": 134,
  "base_defense": 78,
  "base_stamina": 172,
  "pokemon_id": 274,
  "pokemon_name": "Nuzleaf"
  },
  {
  "base_attack": 200,
  "base_defense": 121,
  "base_stamina": 207,
  "pokemon_id": 275,
  "pokemon_name": "Shiftry"
  },
  {
  "base_attack": 106,
  "base_defense": 61,
  "base_stamina": 120,
  "pokemon_id": 276,
  "pokemon_name": "Taillow"
  },
  {
  "base_attack": 185,
  "base_defense": 124,
  "base_stamina": 155,
  "pokemon_id": 277,
  "pokemon_name": "Swellow"
  },
  {
  "base_attack": 106,
  "base_defense": 61,
  "base_stamina": 120,
  "pokemon_id": 278,
  "pokemon_name": "Wingull"
  },
  {
  "base_attack": 175,
  "base_defense": 174,
  "base_stamina": 155,
  "pokemon_id": 279,
  "pokemon_name": "Pelipper"
  },
  {
  "base_attack": 79,
  "base_defense": 59,
  "base_stamina": 99,
  "pokemon_id": 280,
  "pokemon_name": "Ralts"
  },
  {
  "base_attack": 117,
  "base_defense": 90,
  "base_stamina": 116,
  "pokemon_id": 281,
  "pokemon_name": "Kirlia"
  },
  {
  "base_attack": 237,
  "base_defense": 195,
  "base_stamina": 169,
  "pokemon_id": 282,
  "pokemon_name": "Gardevoir"
  },
  {
  "base_attack": 93,
  "base_defense": 87,
  "base_stamina": 120,
  "pokemon_id": 283,
  "pokemon_name": "Surskit"
  },
  {
  "base_attack": 192,
  "base_defense": 150,
  "base_stamina": 172,
  "pokemon_id": 284,
  "pokemon_name": "Masquerain"
  },
  {
  "base_attack": 74,
  "base_defense": 110,
  "base_stamina": 155,
  "pokemon_id": 285,
  "pokemon_name": "Shroomish"
  },
  {
  "base_attack": 241,
  "base_defense": 144,
  "base_stamina": 155,
  "pokemon_id": 286,
  "pokemon_name": "Breloom"
  },
  {
  "base_attack": 104,
  "base_defense": 92,
  "base_stamina": 155,
  "pokemon_id": 287,
  "pokemon_name": "Slakoth"
  },
  {
  "base_attack": 159,
  "base_defense": 145,
  "base_stamina": 190,
  "pokemon_id": 288,
  "pokemon_name": "Vigoroth"
  },
  {
  "base_attack": 290,
  "base_defense": 166,
  "base_stamina": 284,
  "pokemon_id": 289,
  "pokemon_name": "Slaking"
  },
  {
  "base_attack": 80,
  "base_defense": 126,
  "base_stamina": 104,
  "pokemon_id": 290,
  "pokemon_name": "Nincada"
  },
  {
  "base_attack": 199,
  "base_defense": 112,
  "base_stamina": 156,
  "pokemon_id": 291,
  "pokemon_name": "Ninjask"
  },
  {
  "base_attack": 153,
  "base_defense": 73,
  "base_stamina": 1,
  "pokemon_id": 292,
  "pokemon_name": "Shedinja"
  },
  {
  "base_attack": 92,
  "base_defense": 42,
  "base_stamina": 162,
  "pokemon_id": 293,
  "pokemon_name": "Whismur"
  },
  {
  "base_attack": 134,
  "base_defense": 81,
  "base_stamina": 197,
  "pokemon_id": 294,
  "pokemon_name": "Loudred"
  },
  {
  "base_attack": 179,
  "base_defense": 137,
  "base_stamina": 232,
  "pokemon_id": 295,
  "pokemon_name": "Exploud"
  },
  {
  "base_attack": 99,
  "base_defense": 54,
  "base_stamina": 176,
  "pokemon_id": 296,
  "pokemon_name": "Makuhita"
  },
  {
  "base_attack": 209,
  "base_defense": 114,
  "base_stamina": 302,
  "pokemon_id": 297,
  "pokemon_name": "Hariyama"
  },
  {
  "base_attack": 36,
  "base_defense": 71,
  "base_stamina": 137,
  "pokemon_id": 298,
  "pokemon_name": "Azurill"
  },
  {
  "base_attack": 82,
  "base_defense": 215,
  "base_stamina": 102,
  "pokemon_id": 299,
  "pokemon_name": "Nosepass"
  },
  {
  "base_attack": 84,
  "base_defense": 79,
  "base_stamina": 137,
  "pokemon_id": 300,
  "pokemon_name": "Skitty"
  },
  {
  "base_attack": 132,
  "base_defense": 127,
  "base_stamina": 172,
  "pokemon_id": 301,
  "pokemon_name": "Delcatty"
  },
  {
  "base_attack": 141,
  "base_defense": 136,
  "base_stamina": 137,
  "pokemon_id": 302,
  "pokemon_name": "Sableye"
  },
  {
  "base_attack": 155,
  "base_defense": 141,
  "base_stamina": 137,
  "pokemon_id": 303,
  "pokemon_name": "Mawile"
  },
  {
  "base_attack": 121,
  "base_defense": 141,
  "base_stamina": 137,
  "pokemon_id": 304,
  "pokemon_name": "Aron"
  },
  {
  "base_attack": 158,
  "base_defense": 198,
  "base_stamina": 155,
  "pokemon_id": 305,
  "pokemon_name": "Lairon"
  },
  {
  "base_attack": 198,
  "base_defense": 257,
  "base_stamina": 172,
  "pokemon_id": 306,
  "pokemon_name": "Aggron"
  },
  {
  "base_attack": 78,
  "base_defense": 107,
  "base_stamina": 102,
  "pokemon_id": 307,
  "pokemon_name": "Meditite"
  },
  {
  "base_attack": 121,
  "base_defense": 152,
  "base_stamina": 155,
  "pokemon_id": 308,
  "pokemon_name": "Medicham"
  },
  {
  "base_attack": 123,
  "base_defense": 78,
  "base_stamina": 120,
  "pokemon_id": 309,
  "pokemon_name": "Electrike"
  },
  {
  "base_attack": 215,
  "base_defense": 127,
  "base_stamina": 172,
  "pokemon_id": 310,
  "pokemon_name": "Manectric"
  },
  {
  "base_attack": 167,
  "base_defense": 129,
  "base_stamina": 155,
  "pokemon_id": 311,
  "pokemon_name": "Plusle"
  },
  {
  "base_attack": 147,
  "base_defense": 150,
  "base_stamina": 155,
  "pokemon_id": 312,
  "pokemon_name": "Minun"
  },
  {
  "base_attack": 143,
  "base_defense": 166,
  "base_stamina": 163,
  "pokemon_id": 313,
  "pokemon_name": "Volbeat"
  },
  {
  "base_attack": 143,
  "base_defense": 166,
  "base_stamina": 163,
  "pokemon_id": 314,
  "pokemon_name": "Illumise"
  },
  {
  "base_attack": 186,
  "base_defense": 131,
  "base_stamina": 137,
  "pokemon_id": 315,
  "pokemon_name": "Roselia"
  },
  {
  "base_attack": 80,
  "base_defense": 99,
  "base_stamina": 172,
  "pokemon_id": 316,
  "pokemon_name": "Gulpin"
  },
  {
  "base_attack": 140,
  "base_defense": 159,
  "base_stamina": 225,
  "pokemon_id": 317,
  "pokemon_name": "Swalot"
  },
  {
  "base_attack": 171,
  "base_defense": 39,
  "base_stamina": 128,
  "pokemon_id": 318,
  "pokemon_name": "Carvanha"
  },
  {
  "base_attack": 243,
  "base_defense": 83,
  "base_stamina": 172,
  "pokemon_id": 319,
  "pokemon_name": "Sharpedo"
  },
  {
  "base_attack": 136,
  "base_defense": 68,
  "base_stamina": 277,
  "pokemon_id": 320,
  "pokemon_name": "Wailmer"
  },
  {
  "base_attack": 175,
  "base_defense": 87,
  "base_stamina": 347,
  "pokemon_id": 321,
  "pokemon_name": "Wailord"
  },
  {
  "base_attack": 119,
  "base_defense": 79,
  "base_stamina": 155,
  "pokemon_id": 322,
  "pokemon_name": "Numel"
  },
  {
  "base_attack": 194,
  "base_defense": 136,
  "base_stamina": 172,
  "pokemon_id": 323,
  "pokemon_name": "Camerupt"
  },
  {
  "base_attack": 151,
  "base_defense": 203,
  "base_stamina": 172,
  "pokemon_id": 324,
  "pokemon_name": "Torkoal"
  },
  {
  "base_attack": 125,
  "base_defense": 122,
  "base_stamina": 155,
  "pokemon_id": 325,
  "pokemon_name": "Spoink"
  },
  {
  "base_attack": 171,
  "base_defense": 188,
  "base_stamina": 190,
  "pokemon_id": 326,
  "pokemon_name": "Grumpig"
  },
  {
  "base_attack": 116,
  "base_defense": 116,
  "base_stamina": 155,
  "pokemon_id": 327,
  "pokemon_name": "Spinda"
  },
  {
  "base_attack": 162,
  "base_defense": 78,
  "base_stamina": 128,
  "pokemon_id": 328,
  "pokemon_name": "Trapinch"
  },
  {
  "base_attack": 134,
  "base_defense": 99,
  "base_stamina": 137,
  "pokemon_id": 329,
  "pokemon_name": "Vibrava"
  },
  {
  "base_attack": 205,
  "base_defense": 168,
  "base_stamina": 190,
  "pokemon_id": 330,
  "pokemon_name": "Flygon"
  },
  {
  "base_attack": 156,
  "base_defense": 74,
  "base_stamina": 137,
  "pokemon_id": 331,
  "pokemon_name": "Cacnea"
  },
  {
  "base_attack": 221,
  "base_defense": 115,
  "base_stamina": 172,
  "pokemon_id": 332,
  "pokemon_name": "Cacturne"
  },
  {
  "base_attack": 76,
  "base_defense": 132,
  "base_stamina": 128,
  "pokemon_id": 333,
  "pokemon_name": "Swablu"
  },
  {
  "base_attack": 141,
  "base_defense": 201,
  "base_stamina": 181,
  "pokemon_id": 334,
  "pokemon_name": "Altaria"
  },
  {
  "base_attack": 222,
  "base_defense": 124,
  "base_stamina": 177,
  "pokemon_id": 335,
  "pokemon_name": "Zangoose"
  },
  {
  "base_attack": 196,
  "base_defense": 118,
  "base_stamina": 177,
  "pokemon_id": 336,
  "pokemon_name": "Seviper"
  },
  {
  "base_attack": 178,
  "base_defense": 153,
  "base_stamina": 207,
  "pokemon_id": 337,
  "pokemon_name": "Lunatone"
  },
  {
  "base_attack": 178,
  "base_defense": 153,
  "base_stamina": 207,
  "pokemon_id": 338,
  "pokemon_name": "Solrock"
  },
  {
  "base_attack": 93,
  "base_defense": 82,
  "base_stamina": 137,
  "pokemon_id": 339,
  "pokemon_name": "Barboach"
  },
  {
  "base_attack": 151,
  "base_defense": 141,
  "base_stamina": 242,
  "pokemon_id": 340,
  "pokemon_name": "Whiscash"
  },
  {
  "base_attack": 141,
  "base_defense": 99,
  "base_stamina": 125,
  "pokemon_id": 341,
  "pokemon_name": "Corphish"
  },
  {
  "base_attack": 224,
  "base_defense": 142,
  "base_stamina": 160,
  "pokemon_id": 342,
  "pokemon_name": "Crawdaunt"
  },
  {
  "base_attack": 77,
  "base_defense": 124,
  "base_stamina": 120,
  "pokemon_id": 343,
  "pokemon_name": "Baltoy"
  },
  {
  "base_attack": 140,
  "base_defense": 229,
  "base_stamina": 155,
  "pokemon_id": 344,
  "pokemon_name": "Claydol"
  },
  {
  "base_attack": 105,
  "base_defense": 150,
  "base_stamina": 165,
  "pokemon_id": 345,
  "pokemon_name": "Lileep"
  },
  {
  "base_attack": 152,
  "base_defense": 194,
  "base_stamina": 200,
  "pokemon_id": 346,
  "pokemon_name": "Cradily"
  },
  {
  "base_attack": 176,
  "base_defense": 100,
  "base_stamina": 128,
  "pokemon_id": 347,
  "pokemon_name": "Anorith"
  },
  {
  "base_attack": 222,
  "base_defense": 174,
  "base_stamina": 181,
  "pokemon_id": 348,
  "pokemon_name": "Armaldo"
  },
  {
  "base_attack": 29,
  "base_defense": 85,
  "base_stamina": 85,
  "pokemon_id": 349,
  "pokemon_name": "Feebas"
  },
  {
  "base_attack": 192,
  "base_defense": 219,
  "base_stamina": 216,
  "pokemon_id": 350,
  "pokemon_name": "Milotic"
  },
  {
  "base_attack": 139,
  "base_defense": 139,
  "base_stamina": 172,
  "form": "Normal",
  "pokemon_id": 351,
  "pokemon_name": "Castform"
  },
  {
  "base_attack": 139,
  "base_defense": 139,
  "base_stamina": 172,
  "form": "Rainy",
  "pokemon_id": 351,
  "pokemon_name": "Castform"
  },
  {
  "base_attack": 139,
  "base_defense": 139,
  "base_stamina": 172,
  "form": "Snowy",
  "pokemon_id": 351,
  "pokemon_name": "Castform"
  },
  {
  "base_attack": 139,
  "base_defense": 139,
  "base_stamina": 172,
  "form": "Sunny",
  "pokemon_id": 351,
  "pokemon_name": "Castform"
  },
  {
  "base_attack": 161,
  "base_defense": 189,
  "base_stamina": 155,
  "pokemon_id": 352,
  "pokemon_name": "Kecleon"
  },
  {
  "base_attack": 138,
  "base_defense": 65,
  "base_stamina": 127,
  "pokemon_id": 353,
  "pokemon_name": "Shuppet"
  },
  {
  "base_attack": 218,
  "base_defense": 126,
  "base_stamina": 162,
  "pokemon_id": 354,
  "pokemon_name": "Banette"
  },
  {
  "base_attack": 70,
  "base_defense": 162,
  "base_stamina": 85,
  "pokemon_id": 355,
  "pokemon_name": "Duskull"
  },
  {
  "base_attack": 124,
  "base_defense": 234,
  "base_stamina": 120,
  "pokemon_id": 356,
  "pokemon_name": "Dusclops"
  },
  {
  "base_attack": 136,
  "base_defense": 163,
  "base_stamina": 223,
  "pokemon_id": 357,
  "pokemon_name": "Tropius"
  },
  {
  "base_attack": 175,
  "base_defense": 170,
  "base_stamina": 181,
  "pokemon_id": 358,
  "pokemon_name": "Chimecho"
  },
  {
  "base_attack": 246,
  "base_defense": 120,
  "base_stamina": 163,
  "pokemon_id": 359,
  "pokemon_name": "Absol"
  },
  {
  "base_attack": 41,
  "base_defense": 86,
  "base_stamina": 216,
  "pokemon_id": 360,
  "pokemon_name": "Wynaut"
  },
  {
  "base_attack": 95,
  "base_defense": 95,
  "base_stamina": 137,
  "pokemon_id": 361,
  "pokemon_name": "Snorunt"
  },
  {
  "base_attack": 162,
  "base_defense": 162,
  "base_stamina": 190,
  "pokemon_id": 362,
  "pokemon_name": "Glalie"
  },
  {
  "base_attack": 95,
  "base_defense": 90,
  "base_stamina": 172,
  "pokemon_id": 363,
  "pokemon_name": "Spheal"
  },
  {
  "base_attack": 137,
  "base_defense": 132,
  "base_stamina": 207,
  "pokemon_id": 364,
  "pokemon_name": "Sealeo"
  },
  {
  "base_attack": 182,
  "base_defense": 176,
  "base_stamina": 242,
  "pokemon_id": 365,
  "pokemon_name": "Walrein"
  },
  {
  "base_attack": 133,
  "base_defense": 135,
  "base_stamina": 111,
  "pokemon_id": 366,
  "pokemon_name": "Clamperl"
  },
  {
  "base_attack": 197,
  "base_defense": 179,
  "base_stamina": 146,
  "pokemon_id": 367,
  "pokemon_name": "Huntail"
  },
  {
  "base_attack": 211,
  "base_defense": 179,
  "base_stamina": 146,
  "pokemon_id": 368,
  "pokemon_name": "Gorebyss"
  },
  {
  "base_attack": 162,
  "base_defense": 203,
  "base_stamina": 225,
  "pokemon_id": 369,
  "pokemon_name": "Relicanth"
  },
  {
  "base_attack": 81,
  "base_defense": 128,
  "base_stamina": 125,
  "pokemon_id": 370,
  "pokemon_name": "Luvdisc"
  },
  {
  "base_attack": 134,
  "base_defense": 93,
  "base_stamina": 128,
  "pokemon_id": 371,
  "pokemon_name": "Bagon"
  },
  {
  "base_attack": 172,
  "base_defense": 155,
  "base_stamina": 163,
  "pokemon_id": 372,
  "pokemon_name": "Shelgon"
  },
  {
  "base_attack": 277,
  "base_defense": 168,
  "base_stamina": 216,
  "pokemon_id": 373,
  "pokemon_name": "Salamence"
  },
  {
  "base_attack": 96,
  "base_defense": 132,
  "base_stamina": 120,
  "pokemon_id": 374,
  "pokemon_name": "Beldum"
  },
  {
  "base_attack": 138,
  "base_defense": 176,
  "base_stamina": 155,
  "pokemon_id": 375,
  "pokemon_name": "Metang"
  },
  {
  "base_attack": 257,
  "base_defense": 228,
  "base_stamina": 190,
  "pokemon_id": 376,
  "pokemon_name": "Metagross"
  },
  {
  "base_attack": 179,
  "base_defense": 309,
  "base_stamina": 190,
  "pokemon_id": 377,
  "pokemon_name": "Regirock"
  },
  {
  "base_attack": 179,
  "base_defense": 309,
  "base_stamina": 190,
  "pokemon_id": 378,
  "pokemon_name": "Regice"
  },
  {
  "base_attack": 143,
  "base_defense": 285,
  "base_stamina": 190,
  "pokemon_id": 379,
  "pokemon_name": "Registeel"
  },
  {
  "base_attack": 228,
  "base_defense": 246,
  "base_stamina": 190,
  "pokemon_id": 380,
  "pokemon_name": "Latias"
  },
  {
  "base_attack": 268,
  "base_defense": 212,
  "base_stamina": 190,
  "pokemon_id": 381,
  "pokemon_name": "Latios"
  },
  {
  "base_attack": 270,
  "base_defense": 228,
  "base_stamina": 205,
  "pokemon_id": 382,
  "pokemon_name": "Kyogre"
  },
  {
  "base_attack": 270,
  "base_defense": 228,
  "base_stamina": 205,
  "pokemon_id": 383,
  "pokemon_name": "Groudon"
  },
  {
  "base_attack": 284,
  "base_defense": 170,
  "base_stamina": 213,
  "pokemon_id": 384,
  "pokemon_name": "Rayquaza"
  },
  {
  "base_attack": 210,
  "base_defense": 210,
  "base_stamina": 225,
  "pokemon_id": 385,
  "pokemon_name": "Jirachi"
  },
  {
  "base_attack": 414,
  "base_defense": 46,
  "base_stamina": 137,
  "form": "Attack",
  "pokemon_id": 386,
  "pokemon_name": "Deoxys"
  },
  {
  "base_attack": 144,
  "base_defense": 330,
  "base_stamina": 137,
  "form": "Defense",
  "pokemon_id": 386,
  "pokemon_name": "Deoxys"
  },
  {
  "base_attack": 345,
  "base_defense": 115,
  "base_stamina": 137,
  "form": "Normal",
  "pokemon_id": 386,
  "pokemon_name": "Deoxys"
  },
  {
  "base_attack": 230,
  "base_defense": 218,
  "base_stamina": 137,
  "form": "Speed",
  "pokemon_id": 386,
  "pokemon_name": "Deoxys"
  },
  {
  "base_attack": 119,
  "base_defense": 110,
  "base_stamina": 146,
  "pokemon_id": 387,
  "pokemon_name": "Turtwig"
  },
  {
  "base_attack": 157,
  "base_defense": 143,
  "base_stamina": 181,
  "pokemon_id": 388,
  "pokemon_name": "Grotle"
  },
  {
  "base_attack": 202,
  "base_defense": 188,
  "base_stamina": 216,
  "pokemon_id": 389,
  "pokemon_name": "Torterra"
  },
  {
  "base_attack": 113,
  "base_defense": 86,
  "base_stamina": 127,
  "pokemon_id": 390,
  "pokemon_name": "Chimchar"
  },
  {
  "base_attack": 158,
  "base_defense": 105,
  "base_stamina": 162,
  "pokemon_id": 391,
  "pokemon_name": "Monferno"
  },
  {
  "base_attack": 222,
  "base_defense": 151,
  "base_stamina": 183,
  "pokemon_id": 392,
  "pokemon_name": "Infernape"
  },
  {
  "base_attack": 112,
  "base_defense": 102,
  "base_stamina": 142,
  "pokemon_id": 393,
  "pokemon_name": "Piplup"
  },
  {
  "base_attack": 150,
  "base_defense": 139,
  "base_stamina": 162,
  "pokemon_id": 394,
  "pokemon_name": "Prinplup"
  },
  {
  "base_attack": 210,
  "base_defense": 186,
  "base_stamina": 197,
  "pokemon_id": 395,
  "pokemon_name": "Empoleon"
  },
  {
  "base_attack": 101,
  "base_defense": 58,
  "base_stamina": 120,
  "pokemon_id": 396,
  "pokemon_name": "Starly"
  },
  {
  "base_attack": 142,
  "base_defense": 94,
  "base_stamina": 146,
  "pokemon_id": 397,
  "pokemon_name": "Staravia"
  },
  {
  "base_attack": 234,
  "base_defense": 140,
  "base_stamina": 198,
  "pokemon_id": 398,
  "pokemon_name": "Staraptor"
  },
  {
  "base_attack": 80,
  "base_defense": 73,
  "base_stamina": 153,
  "pokemon_id": 399,
  "pokemon_name": "Bidoof"
  },
  {
  "base_attack": 162,
  "base_defense": 119,
  "base_stamina": 188,
  "pokemon_id": 400,
  "pokemon_name": "Bibarel"
  },
  {
  "base_attack": 45,
  "base_defense": 74,
  "base_stamina": 114,
  "pokemon_id": 401,
  "pokemon_name": "Kricketot"
  },
  {
  "base_attack": 160,
  "base_defense": 100,
  "base_stamina": 184,
  "pokemon_id": 402,
  "pokemon_name": "Kricketune"
  },
  {
  "base_attack": 117,
  "base_defense": 64,
  "base_stamina": 128,
  "pokemon_id": 403,
  "pokemon_name": "Shinx"
  },
  {
  "base_attack": 159,
  "base_defense": 95,
  "base_stamina": 155,
  "pokemon_id": 404,
  "pokemon_name": "Luxio"
  },
  {
  "base_attack": 232,
  "base_defense": 156,
  "base_stamina": 190,
  "pokemon_id": 405,
  "pokemon_name": "Luxray"
  },
  {
  "base_attack": 91,
  "base_defense": 109,
  "base_stamina": 120,
  "pokemon_id": 406,
  "pokemon_name": "Budew"
  },
  {
  "base_attack": 243,
  "base_defense": 185,
  "base_stamina": 155,
  "pokemon_id": 407,
  "pokemon_name": "Roserade"
  },
  {
  "base_attack": 218,
  "base_defense": 71,
  "base_stamina": 167,
  "pokemon_id": 408,
  "pokemon_name": "Cranidos"
  },
  {
  "base_attack": 295,
  "base_defense": 109,
  "base_stamina": 219,
  "pokemon_id": 409,
  "pokemon_name": "Rampardos"
  },
  {
  "base_attack": 76,
  "base_defense": 195,
  "base_stamina": 102,
  "pokemon_id": 410,
  "pokemon_name": "Shieldon"
  },
  {
  "base_attack": 94,
  "base_defense": 286,
  "base_stamina": 155,
  "pokemon_id": 411,
  "pokemon_name": "Bastiodon"
  },
  {
  "base_attack": 53,
  "base_defense": 83,
  "base_stamina": 120,
  "form": "Plant",
  "pokemon_id": 412,
  "pokemon_name": "Burmy"
  },
  {
  "base_attack": 53,
  "base_defense": 83,
  "base_stamina": 120,
  "form": "Sandy",
  "pokemon_id": 412,
  "pokemon_name": "Burmy"
  },
  {
  "base_attack": 53,
  "base_defense": 83,
  "base_stamina": 120,
  "form": "Trash",
  "pokemon_id": 412,
  "pokemon_name": "Burmy"
  },
  {
  "base_attack": 141,
  "base_defense": 180,
  "base_stamina": 155,
  "form": "Plant",
  "pokemon_id": 413,
  "pokemon_name": "Wormadam"
  },
  {
  "base_attack": 141,
  "base_defense": 180,
  "base_stamina": 155,
  "form": "Sandy",
  "pokemon_id": 413,
  "pokemon_name": "Wormadam"
  },
  {
  "base_attack": 127,
  "base_defense": 175,
  "base_stamina": 155,
  "form": "Trash",
  "pokemon_id": 413,
  "pokemon_name": "Wormadam"
  },
  {
  "base_attack": 185,
  "base_defense": 98,
  "base_stamina": 172,
  "pokemon_id": 414,
  "pokemon_name": "Mothim"
  },
  {
  "base_attack": 59,
  "base_defense": 83,
  "base_stamina": 102,
  "pokemon_id": 415,
  "pokemon_name": "Combee"
  },
  {
  "base_attack": 149,
  "base_defense": 190,
  "base_stamina": 172,
  "pokemon_id": 416,
  "pokemon_name": "Vespiquen"
  },
  {
  "base_attack": 94,
  "base_defense": 172,
  "base_stamina": 155,
  "pokemon_id": 417,
  "pokemon_name": "Pachirisu"
  },
  {
  "base_attack": 132,
  "base_defense": 67,
  "base_stamina": 146,
  "pokemon_id": 418,
  "pokemon_name": "Buizel"
  },
  {
  "base_attack": 221,
  "base_defense": 114,
  "base_stamina": 198,
  "pokemon_id": 419,
  "pokemon_name": "Floatzel"
  },
  {
  "base_attack": 108,
  "base_defense": 92,
  "base_stamina": 128,
  "pokemon_id": 420,
  "pokemon_name": "Cherubi"
  },
  {
  "base_attack": 170,
  "base_defense": 153,
  "base_stamina": 172,
  "form": "Overcast",
  "pokemon_id": 421,
  "pokemon_name": "Cherrim"
  },
  {
  "base_attack": 170,
  "base_defense": 153,
  "base_stamina": 172,
  "form": "Sunny",
  "pokemon_id": 421,
  "pokemon_name": "Cherrim"
  },
  {
  "base_attack": 103,
  "base_defense": 105,
  "base_stamina": 183,
  "form": "East_sea",
  "pokemon_id": 422,
  "pokemon_name": "Shellos"
  },
  {
  "base_attack": 103,
  "base_defense": 105,
  "base_stamina": 183,
  "form": "West_sea",
  "pokemon_id": 422,
  "pokemon_name": "Shellos"
  },
  {
  "base_attack": 169,
  "base_defense": 143,
  "base_stamina": 244,
  "form": "East_sea",
  "pokemon_id": 423,
  "pokemon_name": "Gastrodon"
  },
  {
  "base_attack": 169,
  "base_defense": 143,
  "base_stamina": 244,
  "form": "West_sea",
  "pokemon_id": 423,
  "pokemon_name": "Gastrodon"
  },
  {
  "base_attack": 205,
  "base_defense": 143,
  "base_stamina": 181,
  "pokemon_id": 424,
  "pokemon_name": "Ambipom"
  },
  {
  "base_attack": 117,
  "base_defense": 80,
  "base_stamina": 207,
  "pokemon_id": 425,
  "pokemon_name": "Drifloon"
  },
  {
  "base_attack": 180,
  "base_defense": 102,
  "base_stamina": 312,
  "pokemon_id": 426,
  "pokemon_name": "Drifblim"
  },
  {
  "base_attack": 130,
  "base_defense": 105,
  "base_stamina": 146,
  "pokemon_id": 427,
  "pokemon_name": "Buneary"
  },
  {
  "base_attack": 156,
  "base_defense": 194,
  "base_stamina": 163,
  "pokemon_id": 428,
  "pokemon_name": "Lopunny"
  },
  {
  "base_attack": 211,
  "base_defense": 187,
  "base_stamina": 155,
  "pokemon_id": 429,
  "pokemon_name": "Mismagius"
  },
  {
  "base_attack": 243,
  "base_defense": 103,
  "base_stamina": 225,
  "pokemon_id": 430,
  "pokemon_name": "Honchkrow"
  },
  {
  "base_attack": 109,
  "base_defense": 82,
  "base_stamina": 135,
  "pokemon_id": 431,
  "pokemon_name": "Glameow"
  },
  {
  "base_attack": 172,
  "base_defense": 133,
  "base_stamina": 174,
  "pokemon_id": 432,
  "pokemon_name": "Purugly"
  },
  {
  "base_attack": 114,
  "base_defense": 94,
  "base_stamina": 128,
  "pokemon_id": 433,
  "pokemon_name": "Chingling"
  },
  {
  "base_attack": 121,
  "base_defense": 90,
  "base_stamina": 160,
  "pokemon_id": 434,
  "pokemon_name": "Stunky"
  },
  {
  "base_attack": 184,
  "base_defense": 132,
  "base_stamina": 230,
  "pokemon_id": 435,
  "pokemon_name": "Skuntank"
  },
  {
  "base_attack": 43,
  "base_defense": 154,
  "base_stamina": 149,
  "pokemon_id": 436,
  "pokemon_name": "Bronzor"
  },
  {
  "base_attack": 161,
  "base_defense": 213,
  "base_stamina": 167,
  "pokemon_id": 437,
  "pokemon_name": "Bronzong"
  },
  {
  "base_attack": 124,
  "base_defense": 133,
  "base_stamina": 137,
  "pokemon_id": 438,
  "pokemon_name": "Bonsly"
  },
  {
  "base_attack": 125,
  "base_defense": 142,
  "base_stamina": 85,
  "pokemon_id": 439,
  "pokemon_name": "Mime Jr."
  },
  {
  "base_attack": 25,
  "base_defense": 77,
  "base_stamina": 225,
  "pokemon_id": 440,
  "pokemon_name": "Happiny"
  },
  {
  "base_attack": 183,
  "base_defense": 91,
  "base_stamina": 183,
  "pokemon_id": 441,
  "pokemon_name": "Chatot"
  },
  {
  "base_attack": 169,
  "base_defense": 199,
  "base_stamina": 137,
  "pokemon_id": 442,
  "pokemon_name": "Spiritomb"
  },
  {
  "base_attack": 124,
  "base_defense": 84,
  "base_stamina": 151,
  "pokemon_id": 443,
  "pokemon_name": "Gible"
  },
  {
  "base_attack": 172,
  "base_defense": 125,
  "base_stamina": 169,
  "pokemon_id": 444,
  "pokemon_name": "Gabite"
  },
  {
  "base_attack": 261,
  "base_defense": 193,
  "base_stamina": 239,
  "pokemon_id": 445,
  "pokemon_name": "Garchomp"
  },
  {
  "base_attack": 137,
  "base_defense": 117,
  "base_stamina": 286,
  "pokemon_id": 446,
  "pokemon_name": "Munchlax"
  },
  {
  "base_attack": 127,
  "base_defense": 78,
  "base_stamina": 120,
  "pokemon_id": 447,
  "pokemon_name": "Riolu"
  },
  {
  "base_attack": 236,
  "base_defense": 144,
  "base_stamina": 172,
  "pokemon_id": 448,
  "pokemon_name": "Lucario"
  },
  {
  "base_attack": 124,
  "base_defense": 118,
  "base_stamina": 169,
  "pokemon_id": 449,
  "pokemon_name": "Hippopotas"
  },
  {
  "base_attack": 201,
  "base_defense": 191,
  "base_stamina": 239,
  "pokemon_id": 450,
  "pokemon_name": "Hippowdon"
  },
  {
  "base_attack": 93,
  "base_defense": 151,
  "base_stamina": 120,
  "pokemon_id": 451,
  "pokemon_name": "Skorupi"
  },
  {
  "base_attack": 180,
  "base_defense": 202,
  "base_stamina": 172,
  "pokemon_id": 452,
  "pokemon_name": "Drapion"
  },
  {
  "base_attack": 116,
  "base_defense": 76,
  "base_stamina": 134,
  "pokemon_id": 453,
  "pokemon_name": "Croagunk"
  },
  {
  "base_attack": 211,
  "base_defense": 133,
  "base_stamina": 195,
  "pokemon_id": 454,
  "pokemon_name": "Toxicroak"
  },
  {
  "base_attack": 187,
  "base_defense": 136,
  "base_stamina": 179,
  "pokemon_id": 455,
  "pokemon_name": "Carnivine"
  },
  {
  "base_attack": 96,
  "base_defense": 116,
  "base_stamina": 135,
  "pokemon_id": 456,
  "pokemon_name": "Finneon"
  },
  {
  "base_attack": 142,
  "base_defense": 170,
  "base_stamina": 170,
  "pokemon_id": 457,
  "pokemon_name": "Lumineon"
  },
  {
  "base_attack": 105,
  "base_defense": 179,
  "base_stamina": 128,
  "pokemon_id": 458,
  "pokemon_name": "Mantyke"
  },
  {
  "base_attack": 115,
  "base_defense": 105,
  "base_stamina": 155,
  "pokemon_id": 459,
  "pokemon_name": "Snover"
  },
  {
  "base_attack": 178,
  "base_defense": 158,
  "base_stamina": 207,
  "pokemon_id": 460,
  "pokemon_name": "Abomasnow"
  },
  {
  "base_attack": 243,
  "base_defense": 171,
  "base_stamina": 172,
  "pokemon_id": 461,
  "pokemon_name": "Weavile"
  },
  {
  "base_attack": 238,
  "base_defense": 205,
  "base_stamina": 172,
  "pokemon_id": 462,
  "pokemon_name": "Magnezone"
  },
  {
  "base_attack": 161,
  "base_defense": 181,
  "base_stamina": 242,
  "pokemon_id": 463,
  "pokemon_name": "Lickilicky"
  },
  {
  "base_attack": 241,
  "base_defense": 190,
  "base_stamina": 251,
  "pokemon_id": 464,
  "pokemon_name": "Rhyperior"
  },
  {
  "base_attack": 207,
  "base_defense": 184,
  "base_stamina": 225,
  "pokemon_id": 465,
  "pokemon_name": "Tangrowth"
  },
  {
  "base_attack": 249,
  "base_defense": 163,
  "base_stamina": 181,
  "pokemon_id": 466,
  "pokemon_name": "Electivire"
  },
  {
  "base_attack": 247,
  "base_defense": 172,
  "base_stamina": 181,
  "pokemon_id": 467,
  "pokemon_name": "Magmortar"
  },
  {
  "base_attack": 225,
  "base_defense": 217,
  "base_stamina": 198,
  "pokemon_id": 468,
  "pokemon_name": "Togekiss"
  },
  {
  "base_attack": 231,
  "base_defense": 156,
  "base_stamina": 200,
  "pokemon_id": 469,
  "pokemon_name": "Yanmega"
  },
  {
  "base_attack": 216,
  "base_defense": 219,
  "base_stamina": 163,
  "pokemon_id": 470,
  "pokemon_name": "Leafeon"
  },
  {
  "base_attack": 238,
  "base_defense": 205,
  "base_stamina": 163,
  "pokemon_id": 471,
  "pokemon_name": "Glaceon"
  },
  {
  "base_attack": 185,
  "base_defense": 222,
  "base_stamina": 181,
  "pokemon_id": 472,
  "pokemon_name": "Gliscor"
  },
  {
  "base_attack": 247,
  "base_defense": 146,
  "base_stamina": 242,
  "pokemon_id": 473,
  "pokemon_name": "Mamoswine"
  },
  {
  "base_attack": 264,
  "base_defense": 150,
  "base_stamina": 198,
  "pokemon_id": 474,
  "pokemon_name": "Porygon-Z"
  },
  {
  "base_attack": 237,
  "base_defense": 195,
  "base_stamina": 169,
  "pokemon_id": 475,
  "pokemon_name": "Gallade"
  },
  {
  "base_attack": 135,
  "base_defense": 275,
  "base_stamina": 155,
  "pokemon_id": 476,
  "pokemon_name": "Probopass"
  },
  {
  "base_attack": 180,
  "base_defense": 254,
  "base_stamina": 128,
  "pokemon_id": 477,
  "pokemon_name": "Dusknoir"
  },
  {
  "base_attack": 171,
  "base_defense": 150,
  "base_stamina": 172,
  "pokemon_id": 478,
  "pokemon_name": "Froslass"
  },
  {
  "base_attack": 204,
  "base_defense": 219,
  "base_stamina": 137,
  "form": "Fan",
  "pokemon_id": 479,
  "pokemon_name": "Rotom"
  },
  {
  "base_attack": 204,
  "base_defense": 219,
  "base_stamina": 137,
  "form": "Frost",
  "pokemon_id": 479,
  "pokemon_name": "Rotom"
  },
  {
  "base_attack": 204,
  "base_defense": 219,
  "base_stamina": 137,
  "form": "Heat",
  "pokemon_id": 479,
  "pokemon_name": "Rotom"
  },
  {
  "base_attack": 204,
  "base_defense": 219,
  "base_stamina": 137,
  "form": "Mow",
  "pokemon_id": 479,
  "pokemon_name": "Rotom"
  },
  {
  "base_attack": 185,
  "base_defense": 159,
  "base_stamina": 137,
  "form": "Normal",
  "pokemon_id": 479,
  "pokemon_name": "Rotom"
  },
  {
  "base_attack": 204,
  "base_defense": 219,
  "base_stamina": 137,
  "form": "Wash",
  "pokemon_id": 479,
  "pokemon_name": "Rotom"
  },
  {
  "base_attack": 156,
  "base_defense": 270,
  "base_stamina": 181,
  "pokemon_id": 480,
  "pokemon_name": "Uxie"
  },
  {
  "base_attack": 212,
  "base_defense": 212,
  "base_stamina": 190,
  "pokemon_id": 481,
  "pokemon_name": "Mesprit"
  },
  {
  "base_attack": 270,
  "base_defense": 151,
  "base_stamina": 181,
  "pokemon_id": 482,
  "pokemon_name": "Azelf"
  },
  {
  "base_attack": 275,
  "base_defense": 211,
  "base_stamina": 205,
  "pokemon_id": 483,
  "pokemon_name": "Dialga"
  },
  {
  "base_attack": 280,
  "base_defense": 215,
  "base_stamina": 189,
  "pokemon_id": 484,
  "pokemon_name": "Palkia"
  },
  {
  "base_attack": 251,
  "base_defense": 213,
  "base_stamina": 209,
  "pokemon_id": 485,
  "pokemon_name": "Heatran"
  },
  {
  "base_attack": 287,
  "base_defense": 210,
  "base_stamina": 221,
  "pokemon_id": 486,
  "pokemon_name": "Regigigas"
  },
  {
  "base_attack": 187,
  "base_defense": 225,
  "base_stamina": 284,
  "form": "Altered",
  "pokemon_id": 487,
  "pokemon_name": "Giratina"
  },
  {
  "base_attack": 225,
  "base_defense": 187,
  "base_stamina": 284,
  "form": "Origin",
  "pokemon_id": 487,
  "pokemon_name": "Giratina"
  },
  {
  "base_attack": 152,
  "base_defense": 258,
  "base_stamina": 260,
  "pokemon_id": 488,
  "pokemon_name": "Cresselia"
  },
  {
  "base_attack": 162,
  "base_defense": 162,
  "base_stamina": 190,
  "pokemon_id": 489,
  "pokemon_name": "Phione"
  },
  {
  "base_attack": 210,
  "base_defense": 210,
  "base_stamina": 225,
  "pokemon_id": 490,
  "pokemon_name": "Manaphy"
  },
  {
  "base_attack": 285,
  "base_defense": 198,
  "base_stamina": 172,
  "pokemon_id": 491,
  "pokemon_name": "Darkrai"
  },
  {
  "base_attack": 210,
  "base_defense": 210,
  "base_stamina": 225,
  "form": "Land",
  "pokemon_id": 492,
  "pokemon_name": "Shaymin"
  },
  {
  "base_attack": 261,
  "base_defense": 166,
  "base_stamina": 225,
  "form": "Sky",
  "pokemon_id": 492,
  "pokemon_name": "Shaymin"
  },
  {
  "base_attack": 238,
  "base_defense": 238,
  "base_stamina": 237,
  "form": "Bug",
  "pokemon_id": 493,
  "pokemon_name": "Arceus"
  },
  {
  "base_attack": 238,
  "base_defense": 238,
  "base_stamina": 237,
  "form": "Dark",
  "pokemon_id": 493,
  "pokemon_name": "Arceus"
  },
  {
  "base_attack": 238,
  "base_defense": 238,
  "base_stamina": 237,
  "form": "Dragon",
  "pokemon_id": 493,
  "pokemon_name": "Arceus"
  },
  {
  "base_attack": 238,
  "base_defense": 238,
  "base_stamina": 237,
  "form": "Electric",
  "pokemon_id": 493,
  "pokemon_name": "Arceus"
  },
  {
  "base_attack": 238,
  "base_defense": 238,
  "base_stamina": 237,
  "form": "Fairy",
  "pokemon_id": 493,
  "pokemon_name": "Arceus"
  },
  {
  "base_attack": 238,
  "base_defense": 238,
  "base_stamina": 237,
  "form": "Fighting",
  "pokemon_id": 493,
  "pokemon_name": "Arceus"
  },
  {
  "base_attack": 238,
  "base_defense": 238,
  "base_stamina": 237,
  "form": "Fire",
  "pokemon_id": 493,
  "pokemon_name": "Arceus"
  },
  {
  "base_attack": 238,
  "base_defense": 238,
  "base_stamina": 237,
  "form": "Flying",
  "pokemon_id": 493,
  "pokemon_name": "Arceus"
  },
  {
  "base_attack": 238,
  "base_defense": 238,
  "base_stamina": 237,
  "form": "Ghost",
  "pokemon_id": 493,
  "pokemon_name": "Arceus"
  },
  {
  "base_attack": 238,
  "base_defense": 238,
  "base_stamina": 237,
  "form": "Grass",
  "pokemon_id": 493,
  "pokemon_name": "Arceus"
  },
  {
  "base_attack": 238,
  "base_defense": 238,
  "base_stamina": 237,
  "form": "Ground",
  "pokemon_id": 493,
  "pokemon_name": "Arceus"
  },
  {
  "base_attack": 238,
  "base_defense": 238,
  "base_stamina": 237,
  "form": "Ice",
  "pokemon_id": 493,
  "pokemon_name": "Arceus"
  },
  {
  "base_attack": 238,
  "base_defense": 238,
  "base_stamina": 237,
  "form": "Normal",
  "pokemon_id": 493,
  "pokemon_name": "Arceus"
  },
  {
  "base_attack": 238,
  "base_defense": 238,
  "base_stamina": 237,
  "form": "Poison",
  "pokemon_id": 493,
  "pokemon_name": "Arceus"
  },
  {
  "base_attack": 238,
  "base_defense": 238,
  "base_stamina": 237,
  "form": "Psychic",
  "pokemon_id": 493,
  "pokemon_name": "Arceus"
  },
  {
  "base_attack": 238,
  "base_defense": 238,
  "base_stamina": 237,
  "form": "Rock",
  "pokemon_id": 493,
  "pokemon_name": "Arceus"
  },
  {
  "base_attack": 238,
  "base_defense": 238,
  "base_stamina": 237,
  "form": "Steel",
  "pokemon_id": 493,
  "pokemon_name": "Arceus"
  },
  {
  "base_attack": 238,
  "base_defense": 238,
  "base_stamina": 237,
  "form": "Water",
  "pokemon_id": 493,
  "pokemon_name": "Arceus"
  },
  {
  "base_attack": 118,
  "base_defense": 99,
  "base_stamina": 130,
  "pokemon_id": 808,
  "pokemon_name": "Meltan"
  },
  {
  "base_attack": 226,
  "base_defense": 190,
  "base_stamina": 264,
  "pokemon_id": 809,
  "pokemon_name": "Melmetal"
  }
  ]
// const pokemonWeWant = pokemon
const pokemonWeWant = "Bulbasaur"
console.log(pokemonWeWant)

let stats = {}

let matchList = data.filter(function(object){
    if (object.pokemon_name === pokemonWeWant) {
        console.log(object.base_attack);
        console.log(object.base_defense);
        console.log(object.base_stamina);
        stats.attack = object.base_attack;
        stats.defense = object.base_defense;
        stats.stamina = object.base_stamina;
    };
    // return object.pokemon_name.includes('Char');

});
  // variable which stores filtered function
  // Unnecessary?
  const pokeObject = matchList;
  // shows object stats
  console.log(stats);
  // three object results transformed to array
  var result = [stats.attack, stats.defense, stats.stamina];
  // creates graph and appends self to new div
d3.select(".chart")
  .selectAll("div")
  .data(result)
    .enter()
    .append("div")
    .style("width", function(d) { return d + "px"; })
    .text(function(d) { return d; });


