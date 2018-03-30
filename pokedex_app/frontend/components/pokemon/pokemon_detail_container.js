import {connect} from 'react-redux';
import { requestPokeman } from '../../actions/pokemon_actions';
import { selectItems } from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => {
  const pokeman = state.entities.pokemon[ownProps.match.params.pokemonId];
  console.log(state.entities);
  return {
    pokeman,
    items: selectItems(state, pokeman)
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestPokeman: (pokemanId) => dispatch(requestPokeman(pokemanId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
