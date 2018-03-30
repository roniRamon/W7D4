import React from 'react';

export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon);
};

export const selectItems = (state, pokeman) => {

  if(pokeman){
    let pokeItems = [];
    let items = state.entities.items;
    (pokeman.item_ids || []).map(id => pokeItems.push(items[id]));
    return pokeItems;
  }
  return [];
};
