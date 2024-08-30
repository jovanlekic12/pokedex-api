"use strict";

const pokemonList = document.querySelector(".pokemon__list");
const pokemonTypeList = document.querySelector(".pokemon__type__list");
const selectedPokemon = document.querySelector(".selected__pokemon");
const searchForm = document.querySelector(".search__pokemon__form");
const searchInput = document.querySelector(".search__pokemon__input");
const pokemonImage = document.querySelector(".pokemon__image");
const pokemonName = selectedPokemon.querySelector(".pokemon__name");
const pokemonHeight = selectedPokemon.querySelector(".pokemon__height");
const pokemonWeight = selectedPokemon.querySelector(".pokemon__weight");
const pokemonType = selectedPokemon.querySelector(".pokemon__type");
const pokemonId = selectedPokemon.querySelector(".pokemon__id");
const overlay = document.querySelector(".overlay");

let searchInputValue = "";

searchInput.addEventListener(
  "input",
  () => (searchInputValue = searchInput.value)
);
const baseUrl = "https://pokeapi.co/api/v2/";

const getPokemonsByType = async (pokemonType) => {
  try {
    const response = await fetch(baseUrl + `type/${pokemonType}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

function displayPokemonsList(data) {
  pokemonList.innerHTML = "";
  data.forEach((pokemon) => {
    const html = `<li class="pokemon-list-item">
                    <p>${pokemon.pokemon.name}</p>
                  </li>`;
    pokemonList.insertAdjacentHTML("beforeend", html);
  });
}

pokemonTypeList.addEventListener("click", (event) => {
  getPokemonsByType(event.target.closest("li").getAttribute("data-type"))
    .then((data) => {
      displayPokemonsList(data.pokemon);
    })
    .catch((err) => console.log(err.message));
});

const getPokemonByName = async (pokemonName) => {
  try {
    const response = await fetch(baseUrl + `pokemon/${pokemonName}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

function displaySelectedPokemon(image, name, height, weight, type, id) {
  pokemonImage.src = image;
  pokemonName.textContent = name;
  pokemonHeight.textContent = `${height} ft`;
  pokemonWeight.textContent = `${weight} lb`;
  pokemonType.textContent = type;
  pokemonId.textContent = id;
  overlay.style.visibility = "visible";
  selectedPokemon.style.visibility = "visible";
}
