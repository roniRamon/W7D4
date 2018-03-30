import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import Root from './components/root';

import selectAllPokemon from './reducers/selectors';
import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
import {fetchAllPokemon} from './util/api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  ReactDOM.render(<Root  store={store} />, document.getElementById('root'));


  window.store = store;
  window.selectAllPokemon = selectAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
});
