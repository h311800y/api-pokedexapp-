
const pokemoncontainer = document.querySelector('.pokemon-container')


function fetchPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res=> res.json())
    .then(data => {
        createPokemon(data)
    })
}

function fetchPokemons(number){
    for(let i = 1;i <= number; i++){
        fetchPokemon(i)
    }
}

function createPokemon(pokemon){
    const card = document.createElement('div')
    card.classList.add('pokemon-block')
    
    const spriteConteiner = document.createElement('div')
    spriteConteiner.classList.add('img-container')

    const sprite = document.createElement('img')
    sprite.src = pokemon.sprites.front_default

    spriteConteiner.appendChild(sprite)
    
    const number = document.createElement('p')
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`

    const name = document.createElement('p')
    name.classList.add('name')
    name.textContent = pokemon.name

    card.appendChild(spriteConteiner)
    card.appendChild(number)
    card.appendChild(name)

    pokemoncontainer.appendChild(card)
}

fetchPokemons(12)