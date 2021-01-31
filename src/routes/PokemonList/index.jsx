import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSearchField, setCurrentPage } from '../../redux/module/actions';

import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '../../graphql/index';

import PaginationBar from "../../components/PaginationBar";

import './styles.scss';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchPokemon.searchField,
    curPage: state.changePage.curPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value.toLowerCase())),
    onChangePage: (num) => dispatch(setCurrentPage(num))
  }
}

function PokemonList(props) {
  const [pokemons, setPokemons] = useState([])
  const [gqlVariable, setGqlVariable] = useState({limit:0, offset:0})

  const { loading, error, data, refetch } = useQuery(GET_POKEMONS, {
    variables: gqlVariable
  })

  useEffect( () => {
    if(data) {
      setPokemons(data.pokemons.results);
    } else if(error) {
      console.log(error);
    }
  }, [loading, error, data])

  useEffect(() => {
    setGqlVariable({
      limit: 10,
      offset: props.curPage*10
    })
    refetch();
  }, [props.curPage])

  const filteredPokemon = pokemons.filter(pokemons => {
    return pokemons.name.includes(props.searchField);
  })

  function findPokemon(e) {
    if(e.key === 'Enter') {
      window.location.href = "/detail/" + e.target.value;
    }
  }

  return (
    <div className="pokemon-list-wrapper">
      {loading ? <span>Loading...</span> :
        <>
          <div className="pokemon-list-title">
            <span>Pokemon List</span>
          </div>

          <div className="search-field">
            <input className="search-field-input" type="search" placeholder="Filter here..." onChange={props.onSearchChange} value={props.searchField}/>
          </div>
          <div className="search-field">
            <input className="search-field-input" type="search" placeholder="Search here..." onKeyPress={findPokemon}/>
          </div>

          <div className="pokemon-list-card-wrapper">
          {filteredPokemon.map((items, i) => (
            <Link to={"/detail/" + items.name} key={i}>
              <div className="pokemon-list-card">
                <img src={items.image} alt={items.name} />
                <div className="pokemon-name">{items.name}</div>
                <div className="pokemon-count">
                  Owned:
                  {JSON.parse(localStorage.getItem(items.name)) == null
                    ? "0" : JSON.parse(localStorage.getItem(items.name)).count}
                </div>
              </div>
            </Link>
          ))}
          </div>
        </>
      }

      <PaginationBar />

    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);