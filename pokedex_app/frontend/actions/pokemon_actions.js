export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKEMAN = 'RECEIVE_POKEMAN';
import * as APIUtil from '../util/api_util';

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receivePokeman = (pokeman) => ({
  type: RECEIVE_POKEMAN,
  pokeman: pokeman.pokemon,
  items: pokeman.items
});

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then( (pokemon) => dispatch(receiveAllPokemon(pokemon)) )
);

export const requestPokeman = (pokemanId) => (dispatch) => (
  APIUtil.fetchPokeman(pokemanId)
    .then( (pokeman) => dispatch(receivePokeman(pokeman)) )
);
