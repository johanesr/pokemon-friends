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

  function removePokemon(name, nickname) {
    const deletePokemon = JSON.parse(localStorage.getItem(name));
    let deleteNickname = deletePokemon.nickname;

    deleteNickname.splice(deleteNickname.indexOf(nickname),1);
    deletePokemon.nickname = deleteNickname;
    deletePokemon.count--;

    localStorage.removeItem(name);
    if(deletePokemon.nickname.length!==0) {
      localStorage.setItem(name, JSON.stringify(deletePokemon));
    }

    window.location.reload();
  }

  return (
    <div className="my-list-wrapper">
      <div className="my-list-card-wrapper">
        {ownPokemon.map((pokemon,i) => (
          <div className="pokemon-list-card" key={i}>
            <img src={pokemon.data.image} alt={pokemon.name}/>
            <div className="pokemon-name">{pokemon.name}</div>
            {pokemon.data.nickname.map((nickname, j) => (
              <div key={j} className="pokemon-nickname">
                <span>{nickname}</span>
                <button onClick={() => removePokemon(pokemon.name, nickname)}>Delete</button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyList;