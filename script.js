const pokemon = require('./data.js')

//Exercise 1
const game = {
  party: [],
  gyms: [
    { location: 'Pewter City', completed: false, difficulty: 1 },
    { location: 'Cerulean City', completed: false, difficulty: 2 },
    { location: 'Vermilion City', completed: false, difficulty: 3 },
    { location: 'Celadon City', completed: false, difficulty: 4 },
    { location: 'Fuchsia City', completed: false, difficulty: 5 },
    { location: 'Saffron City', completed: false, difficulty: 6 },
    { location: 'Cinnabar Island', completed: false, difficulty: 7 },
    { location: 'Viridian City', completed: false, difficulty: 8 }
  ],
  items: [
    { name: 'potion', quantity: 4 },
    { name: 'pokeball', quantity: 8 },
    { name: 'rare candy', quantity: 99 }
  ]
}

//console.dir(pokemon, { maxArrayLength: null })
//console.log(pokemon[59])

// //Exercise 2
// console.log(game)

//Exercise 3
game.difficulty = 'Hard'
//console.log(game)

//Exercise 4
const starter = pokemon.find((poke) => poke.name === 'Pikachu')
game.party.push(starter)

// console.log(game)

//Exercise 5
const poke1 = pokemon.find((poke) => poke.name === 'Charizard')
const poke2 = pokemon.find((poke) => poke.name === 'Blastoise')
const poke3 = pokemon.find((poke) => poke.name === 'Venusaur')

game.party.push(poke1)
game.party.push(poke2)
game.party.push(poke3)

// console.log(game.party)

//Exercise 6
game.gyms.forEach((gym) => {
  if (gym.difficulty < 3) {
    gym.completed = true
  }
})

// console.log(game.gyms)

//Exercise 7
const sIndex = game.party.findIndex((poke) => poke.name === 'Pikachu')

const evoForm = pokemon.find((poke) => poke.name === 'Raichu')

if (sIndex !== -1) {
  game.party.splice(sIndex, 1, evoForm)
}

//console.log(game.party)

//Exercise 8
game.party.forEach((poke) => {
  //  console.log(poke.name)
})

//Exercise 9
const starters = pokemon.filter((poke) => poke.starter === true)

starters.forEach((poke) => {
  //  console.log(poke.name)
})

//Exercise 10
game.catchPoke = (pokemonObj) => {
  game.party.push(pokemonObj)
}

const mewtwo = pokemon.find((poke) => poke.name === 'Mewtwo')
game.catchPoke(mewtwo)

console.log(game.party)
