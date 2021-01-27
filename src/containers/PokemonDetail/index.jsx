import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './styles.scss';

function PokemonDetail() {
  const [pokemonImage, setPokemonImage] = useState('');
  const [pokemonMoves, setPokemonMoves] = useState([]);
  const {pokemonName} = useParams();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(res => {
        setPokemonImage(res.data.sprites.front_default)
        setPokemonMoves(res.data.abilities);
      })
      .catch(err => {console.log(err)});
  }, [])

  function onClickCapture() {
    // Set the Capture Probability returns 0 or 1
    let probability = Math.floor(Math.random() * Math.floor(2));
    if(probability) {
      alert("TEST");
      console.log(probability)
    }

    // localStorage.setItem( pokemonName, {
    //   nickname: pokemonName
    // });
  }

  return (
    <div className="pokemon-detail-wrapper">

      <div className="pokemon-detail-card-wrapper">
        <div className="pokemon-detail-card">
          <img
            src={pokemonImage}
            alt={pokemonName}
          />
          <div className="pokemon-name">{pokemonName}</div>
          <div>Abilities</div>
          <div className="abilities-wrapper">
            {pokemonMoves.map((moves, i) => (
              <div key={i}>{moves.ability.name}</div>
              )
            )}
          </div>
          <button type="button" onClick={onClickCapture}>CAPTURE!</button>
        </div>
      </div>

    </div>
  );
}

export default PokemonDetail;