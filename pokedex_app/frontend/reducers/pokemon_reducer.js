import React from 'react';
import {RECEIVE_ALL_POKEMON, RECEIVE_POKEMAN} from '../actions/pokemon_actions';
import { merge } from 'lodash';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_POKEMAN:
      return merge( {}, state, action.pokeman );
    default:
      return state;
  }
};

export default pokemonReducer;
