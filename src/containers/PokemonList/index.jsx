import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import './styles.scss';

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect( () => {
    axios.get('https://pokeapi.co/api/v2/pokedex/2')
      .then(res => {setPokemons(res.data.pokemon_entries);})
      .catch(err => {console.log(err)});
  }, [])

  return (
    <div className="pokemon-list-wrapper">
      <div className="search-field">
        <input type="search" placeholder="Search here..."/>
        <button type="button">Search</button>
      </div>

      <div className="pokemon-list-card-wrapper">
        {pokemons.map((items, i) => (
          <Link to={"/detail/" + items.pokemon_species.name} key={i}>
            <div className="pokemon-list-card">
              <div className="pokemon-name">{items.pokemon_species.name}</div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}

export default PokemonList;