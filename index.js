class Pokemon {
  constructor(name, sprite) {
    this.name = name;
    this.type = [];
    this.sprite = sprite;
  }

  addType(type) {
    this.type.push(type);
  }

  getName() {
    return this.name.slice(0, 1).toUpperCase() + this.name.slice(1);
  }

  getTypes() {
    const types = this.type.map((type) => {
      return type.slice(0, 1).toUpperCase() + type.slice(1);
    })

    return types.join(", ");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const loadPokemonButton = document.getElementById("searchButton");
  const pokemonNameInput = document.getElementById("pokemonName");
  const pokemonContainer = document.getElementById("result");
  const errorContainer = document.getElementById("error");

  loadPokemonButton.addEventListener("click", async () => {
    try {
      // Fetch Pokémon data (you can replace this with a real API call)
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameInput.value}`);
      const data = await response.json();

      // Create a Pokémon object
      const pokemon = new Pokemon(data.name, data.sprites.front_default);

      // Add Pokémon types
      data.types.forEach((type) => {
        pokemon.addType(type.type.name);
      });

      // Display Pokémon data
      const pokemonCard = document.createElement("div");
      pokemonCard.classList.add("pokemonCard");
      pokemonContainer.appendChild(pokemonCard);


      const pokemonImageContainer = document.createElement("div");
      const pokemonInfoContianer = document.createElement("div");

      pokemonCard.appendChild(pokemonImageContainer);
      pokemonCard.appendChild(pokemonInfoContianer);

      const pokemonImg = document.createElement("img");
      pokemonImg.src = pokemon.sprite;
      pokemonImageContainer.appendChild(pokemonImg);


      const pokemonName = document.createElement("h2");
      pokemonName.innerText = pokemon.getName();
      pokemonInfoContianer.appendChild(pokemonName);

      const pokemonType = document.createElement("p");
      pokemonType.innerText = pokemon.getTypes();
      pokemonInfoContianer.appendChild(pokemonType);

      setBackgroundColor(pokemon.type[0], pokemonCard)

    } catch (error) {
      console.error("Error loading Pokémon:", error);
      const errorMessage = document.createElement("p");
      errorMessage.classList.add("errorMessage");
      errorMessage.innerText = "Pokemon Not Found";
      setTimeout(() => {
        errorMessage.remove();
      }, 3000)
      errorContainer.appendChild(errorMessage);
    }
  });
});

function setBackgroundColor(type, container) {
  switch(type) {
    case 'normal':
      container.style.backgroundColor = '#A8A878';
      break;
    case 'fire':
      container.style.backgroundColor = '#F08030';
      break;
    case 'water':
      container.style.backgroundColor = '#6890F0';
      break;
    case 'electric':
      container.style.backgroundColor = '#F8D030';
      break;
    case 'grass':
      container.style.backgroundColor = '#78C850';
      break;
    case 'ice':
      container.style.backgroundColor = '#98D8D8';
      break;
    case 'fighting':
      container.style.backgroundColor = '#C03028';
      break;
    case 'poison':
      container.style.backgroundColor = '#A040A0';
      break;
    case 'ground':
      container.style.backgroundColor = '#E0C068';
      break;
    case 'flying':
      container.style.backgroundColor = '#A890F0';
      break;
    case 'psychic':
      container.style.backgroundColor = '#F85888';
      break;
    case 'bug':
      container.style.backgroundColor = '#A8B820';
      break;
    case 'rock':
      container.style.backgroundColor = '#B8A038';
      break;
    case 'ghost':
      container.style.backgroundColor = '#705898';
      break;
    case 'dragon':
      container.style.backgroundColor = '#7038F8';
      break;
    case 'dark':
      container.style.backgroundColor = '#705848';
      break;
    case 'steel':
      container.style.backgroundColor = '#B8B8D0';
      break;
    case 'fairy':
      container.style.backgroundColor = '#EE99AC';
      break;
    default:
      container.style.backgroundColor = '#FFFFFF';
      break;
  }
}