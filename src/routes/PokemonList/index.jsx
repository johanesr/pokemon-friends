import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSearchField } from '../../redux/module/actions';

import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '../../graphql/index';

import './styles.scss';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchPokemon.searchField,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value.toLowerCase()))
  }
}

function PokemonList(props) {
  const [pokemons, setPokemons] = useState([])
  let gqlVariable = {
    limit:151,
    offset:0
  };

  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariable
  })

  useEffect( () => {
    if(data) {
      setPokemons(data.pokemons.results);
    } else if(error) {
      console.log(error);
    }
  }, [loading, error, data])

  const filteredPokemon = pokemons.filter(pokemons => {
    return pokemons.name.includes(props.searchField);
  })

  return (
    <div className="pokemon-list-wrapper">
      {loading ? <span>Loading...</span> :
        <>
          <div>KANTO Region Pokemon</div>

          <div className="search-field">
            <input type="search" placeholder="Search here..." onChange={props.onSearchChange} value={props.searchField}/>
          </div>

          <div className="pokemon-list-card-wrapper">
          {filteredPokemon.map((items, i) => (
            <Link to={"/detail/" + items.name} key={i}>
              <div className="pokemon-list-card">
                <img src={items.image} alt={items.name} />
                <div className="pokemon-name">{items.name}</div>
                <div className="pokemon-name">
                  Owned:
                  {JSON.parse(localStorage.getItem(items.name)) == null ?
                    "0" : JSON.parse(localStorage.getItem(items.name)).count}
                </div>
              </div>
            </Link>
          ))}
          </div>

          <div className="pagination">
            <div>First</div>
            <div>❮</div>
            <div>❯</div>
            <div>Last</div>
          </div>

        </>
      }

    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);