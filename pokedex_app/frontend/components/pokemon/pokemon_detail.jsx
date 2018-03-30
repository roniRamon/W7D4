import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestPokeman(this.props.match.params.pokemonId);
  }

  // componentWillReceiveProps(newProps){
  //   this.props.requestPokeman(newProps.match.params.pokemonId);
  // }

  render(){
    if (!this.props.pokeman) {
      return null;
    }

    return (
      <section>
          <figure>
            <img src={this.props.pokeman.image_url} />
          </figure>

          <ul>
            <li><h2>{this.props.pokeman.name}</h2></li>
            <li>Type: {this.props.pokeman.poke_type}</li>
            <li>Attack: {this.props.pokeman.attack}</li>
            <li>Defense: {this.props.pokeman.defense}</li>
            <li>Moves: {(this.props.pokeman.moves || []).join(",")}</li>
          </ul>

          <section>
            <h3>Items</h3>
            <ul>
              {this.props.items.map( (item) => <li>{item.name}</li>)}
            </ul>
          </section>
      </section>
    );
  }
}

export default PokemonDetail;
