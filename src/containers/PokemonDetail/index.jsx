import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { gql } from '@apollo/client';


import './styles.scss';

const mapStateToProps = (state) => {
  return {isLoading: state.requestPokemon.isLoading};
}

function PokemonDetail() {
  const [pokemonImage, setPokemonImage] = useState('');
  const [pokemonMoves, setPokemonMoves] = useState([]);
  const [isCaught, setIsCaught] = useState(false);
  const [failCounter, setFailCounter] = useState(0);
  const [pokemonNickname, setPokemonNickname] = useState('')
  const {pokemonName} = useParams();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(res => {
        setPokemonImage(res.data.sprites.front_default)
        setPokemonMoves(res.data.abilities);
      })
      .catch(err => {console.log(err)});
  })

  function onClickCapture() {
    // Set the Capture Probability returns 0 or 1
    let probability = Math.floor(Math.random() * Math.floor(2));
    let count = failCounter;

    if(probability) {
      setFailCounter(0);
      setIsCaught(true);
    }

    count++;
    setFailCounter(count);
  }

  function onChangeNickname(e) {
    setPokemonNickname(e.target.value);
  }
  function onSubmitNickname() {
    console.log(pokemonNickname);
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
          {!isCaught ?
            <button type="button" className="capture-button" onClick={onClickCapture}>CAPTURE!</button>
            :
            <>
              <input type="text" placeholder="Input nickname here..." onChange={onChangeNickname} />
              <button type="button" className="capture-button" onClick={onSubmitNickname}>Set Nickname</button>
            </>
          }
          {(!isCaught && (failCounter>=0)) ?
            <div className="description-text">You have failed {failCounter}!</div>
            :
            <div className="description-text">You have successfully caught {pokemonName}! <br/> Give it a new nickname</div>}
        </div>
      </div>

    </div>
  );
}

export default connect(mapStateToProps, null)(PokemonDetail);