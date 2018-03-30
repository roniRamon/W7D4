import React from 'react';

export const fetchAllPokemon = () => {
  return $.ajax({
    url: '/api/pokemon',
    method: 'GET',
    dataType: 'json'
  });
};

export const fetchPokeman = (pokemanId) => {
  return $.ajax({
    url: `/api/pokemon/${pokemanId}`,
    method: 'GET',
    dataType: 'json',
  });
};
