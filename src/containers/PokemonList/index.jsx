import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSearchField, requestPokemons } from '../../redux/module/actions';

import './styles.scss';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchPokemon.searchField,
    pokemons: state.requestPokemon.pokemons,
    isLoading: state.requestPokemon.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value.toLowerCase())),
    onRequestPokemons: () => dispatch(requestPokemons())
  }
}

function PokemonList(props) {
  useEffect( () => {
    props.onRequestPokemons();
  }, [])

  const filteredPokemon = props.pokemons.filter(pokemons => {
    return pokemons.pokemon_species.name.includes(props.searchField);
  })


  return (
    <div className="pokemon-list-wrapper">
      <div className="search-field">
        <input type="search" placeholder="Search here..." onChange={props.onSearchChange}/>
      </div>

      <div className="pokemon-list-card-wrapper">
        {filteredPokemon.map((items, i) => (
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

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);