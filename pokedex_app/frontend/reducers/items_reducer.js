import React from 'react';
import { RECEIVE_POKEMAN } from '../actions/pokemon_actions';
import { merge } from 'lodash';


const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  console.log(action);
  switch (action.type) {
    case RECEIVE_POKEMAN:
      return merge( {}, state, action.items );
    default:
      return state;
  }
};

export default itemsReducer;
