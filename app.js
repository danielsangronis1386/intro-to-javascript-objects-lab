const pokemon = require('./data.js')

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
  
  //console.dir(pokemon, { maxArrayLength: null})

  //console.log(pokemon[1].name)

  //console.log(game)

  /*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
game.difficulty = 'medium'

//console.log(game.difficulty)

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

const starterPokemon = pokemon.find (poke => poke.starter === true)

//console.log (starterPokemon)

game.party.push(starterPokemon)

//console.log (game.party)


/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

const waterPokemon = pokemon.filter(function(p){
  return p.type === "water"
})

//console.log (waterPokemon)

const threePokemon = waterPokemon.slice(0,3)

//console.log (threePokemon)

game.party.push(...threePokemon)

//console.log(game.party)

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/
game.gyms.forEach(function(gym) {
  if (gym.difficulty <3) {
    gym.completed = true
  }
  
})

//console.log(game.gyms)

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon
it evolved into. When working with an array of objects, 
the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/
const evolutions = {
  'Bulbasaur': 'Ivysaur',
  'Charmander': 'Charmeleon',
  'Squirtle': 'Wartortle',
  'Pikachu': 'Raichu'
}

const startername = 'Bulbasaur'
const starterIndex = game.party.findIndex (poke => poke.name === startername)
const evolved = pokemon.find(poke => poke.name === evolutions[startername])
game.party.splice(starterIndex, 1, evolved)

//console.log (game.party)

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/
game.party.forEach(function(poke){
  console.log(poke.name)
})




  
