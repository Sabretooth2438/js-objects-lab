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

//Exercise 2
// console.log(game)

//Exercise 3
game.difficulty = 'Hard'
console.log(game)

//Exercise 4
const starterPokemon = pokemon.find((poke) => {
  return poke.name === 'Pikachu'
})

game.party.push(starterPokemon)

console.log(game)

//Exercise 5
const charizard = pokemon.find((poke) => {
  return poke.name === 'Charizard'
})
const blastoise = pokemon.find((poke) => {
  return poke.name === 'Blastoise'
})
const venusaur = pokemon.find((poke) => {
  return poke.name === 'Venusaur'
})

game.party.push(charizard)
game.party.push(blastoise)
game.party.push(venusaur)

console.log(game.party)

//Exercise 6
game.gyms.forEach((gym) => {
  if (gym.difficulty < 3) {
    gym.completed = true
  }
})

console.log(game.gyms)

//Exercise 7
const starterIndex = game.party.findIndex((poke) => {
  return poke.name === 'Pikachu'
})

const evolveForm = pokemon.find((poke) => {
  return poke.name === 'Raichu'
})

if (starterIndex !== -1) {
  game.party.splice(starterIndex, 1, evolveForm)
}

console.log(game.party)

//Exercise 8
game.party.forEach((poke) => {
  console.log(poke.name)
})

//Exercise 9
const starters = pokemon.filter((poke) => poke.starter === true)

starters.forEach((poke) => {
  console.log(poke.name)
})

//Exercise 10
game.catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj)
}

const snorlax = pokemon.find((poke) => {
  return poke.name === 'Snorlax'
})
game.catchPokemon(snorlax)

console.log(game.party)

//Exercise 11
game.catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj)

  const pokeball = game.items.find((item) => {
    return item.name === 'pokeball'
  })
  if (pokeball) {
    pokeball.quantity -= 1
  }
}

const mewtwo = pokemon.find((poke) => {
  return poke.name === 'Mewtwo'
})
game.catchPokemon(mewtwo)
console.log(game.items)

//Exercise 12
game.gyms.forEach((gym) => {
  if (gym.difficulty < 6) {
    gym.completed = true
  }
})

console.log(game.gyms)

//Exercise 13
game.gymStatus = () => {
  const gymTally = { completed: 0, incomplete: 0 }

  game.gyms.forEach((gym) => {
    if (gym.completed) {
      gymTally.completed += 1
    } else {
      gymTally.incomplete += 1
    }
  })

  console.log(gymTally)
}

game.gymStatus()

//Exercise 14
game.partyCount = () => {
  return game.party.length
}

console.log(game.partyCount())

//Exercise 15
game.gyms.forEach((gym) => {
  if (gym.difficulty < 8) {
    gym.completed = true
  }
})

console.log(game.gyms)

//Exercise 16
console.log(game)
