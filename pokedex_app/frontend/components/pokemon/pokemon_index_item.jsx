import React from 'react';
import { Link } from 'react-router-dom';


const PokemonIndexItem = ({pokeman}) => {
  const link = "/pokemon/" + pokeman.id;
  return (
    <li key={pokeman.id}>
      <Link to={link} >
        <span>{pokeman.id}</span>
        <img src={pokeman.image_url}/>
        <span>{pokeman.name}</span>
      </Link>
    </li>);

};

export default PokemonIndexItem;
