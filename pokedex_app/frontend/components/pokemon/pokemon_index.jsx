import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    console.log(this.props);
    return (
      <div className="pokemon-index-div">
        <ul className="pokemon-index">
          {
            this.props.pokemon.map( (pokeman) => (
              <PokemonIndexItem key={pokeman.id} pokeman={pokeman} />
            ))
          }
        </ul>
      </div>
    );
  }

}

export default PokemonIndex;
