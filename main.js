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
