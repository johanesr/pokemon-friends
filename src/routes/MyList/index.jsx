import { useState, useEffect } from 'react';
import './styles.scss';

function MyList() {
  const [ownPokemon, setOwnPokemon] = useState([]);

  useEffect(() => {
    let keys = Object.keys(localStorage);
    let eachPokemon = {};
    let pokemons = [];

    for (let i=0; i< keys.length; i++) {
      try {
        eachPokemon = {
          name: keys[i],
          data: JSON.parse(localStorage.getItem(keys[i]))
        }
      } catch (e) {
        continue;
      }
      pokemons.push(eachPokemon);
      setOwnPokemon(pokemons);
    }
  }, [])

  function onTest() {
    console.log(ownPokemon);
  }

  return (
    <div className="my-list-wrapper">
      <div className="my-list-card-wrapper">
        {ownPokemon.map((pokemon,i) => (
          <div className="pokemon-list-card" key={i}>
            <div className="pokemon-name" onClick={onTest}>{pokemon.name}</div>
            {pokemon.data.name.map((nickname, j) => (
              <div key={j}>{nickname}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyList;