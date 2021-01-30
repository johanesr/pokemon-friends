import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { GET_SPEFICIC_POKEMON } from '../../graphql/index';

import './styles.scss';

function PokemonDetail() {
  const [pokemonType, setPokemonType] = useState([]);
  const [pokemonImage, setPokemonImage] = useState('');
  const [pokemonMoves, setPokemonMoves] = useState([]);
  const {pokemonName} = useParams();

  const [captureMessage, setCaptureMessage] = useState('');
  const [isCaught, setIsCaught] = useState(false);
  const [failCounter, setFailCounter] = useState(0);
  const [pokemonNickname, setPokemonNickname] = useState('')
  let nicknames = { 'nickname':[], 'count': 0, 'image': '' };

  const { loading, error, data } = useQuery(GET_SPEFICIC_POKEMON, {
    variables: {name: pokemonName},
  });

  useEffect(() => {
    if(data) {
      setPokemonImage(data.pokemon.sprites.front_default);
      setPokemonMoves(data.pokemon.moves);
      setPokemonType(data.pokemon.types);
    } else if(error) {
      console.log(error);
    }
  }, [loading, error, data])

  function onClickCapture() {
    // Set the Capture Probability returns 0 or 1
    let probability = Math.floor(Math.random() * Math.floor(2));
    let count = failCounter;

    if(probability) {
      setFailCounter(0);
      setIsCaught(true);
      setCaptureMessage(`You have successfully caught ${pokemonName}! Give it a new nickname to save it to storage`);
    } else {
      count++;
      setFailCounter(count);
      setCaptureMessage(`You have failed ${count} times!`);
    }
  }

  function onChangeNickname(e) {
    setPokemonNickname(e.target.value);
  }

  function onSubmitNickname() {
    if(pokemonNickname==="") {setCaptureMessage("Please fill the nickname input")}
    else {
      if (!localStorage.getItem(pokemonName)) {
        setIsCaught(false);
        setFailCounter(0);

        nicknames.nickname.push(pokemonNickname);
        nicknames.count++;
        nicknames.image = pokemonImage;

        localStorage.setItem(pokemonName, JSON.stringify(nicknames));
        setCaptureMessage(`${pokemonNickname} has been added to storage!`);

      } else {
        nicknames = JSON.parse(localStorage.getItem(pokemonName));

        if(nicknames.nickname.includes(pokemonNickname)) {
          setCaptureMessage("Nickname for this pokemon already exist in you pokemon storage")
        } else {
          setIsCaught(false);
          setFailCounter(0);

          nicknames.nickname.push(pokemonNickname);
          nicknames.count++;
          nicknames.image = pokemonImage;

          localStorage.setItem(pokemonName, JSON.stringify(nicknames));
          setCaptureMessage(`${pokemonNickname} has been added to storage!`);
        }
      }
    }
  }

  return (
    <div className="pokemon-detail-wrapper">
      {loading ? <span>Loading...</span> :

        <div className="pokemon-detail-card-wrapper">
          <div className="pokemon-detail-card">

            <img
              src={pokemonImage}
              alt={pokemonName}
            />

            <div className="pokemon-name">{pokemonName}</div>

            <div>Type: {pokemonType.map((types, i) => (
                <span key={i}>{types.type.name} </span>
              )
            )}</div>

            <br/>

            <div className="description-text">{captureMessage}</div>

            {!isCaught ?
              <button type="button" className="capture-button" onClick={onClickCapture}>CAPTURE!</button>
              :
              <>
                <span>Nickname: </span>
                <input type="text" placeholder="Input nickname here..." value={pokemonNickname} onChange={onChangeNickname} />
                <button type="button" className="capture-button" onClick={onSubmitNickname}>Set Nickname</button>
              </>
            }

            <div>Abilities</div>
            <div className="abilities-wrapper">
              {pokemonMoves.map((moves, i) => (
                  <div key={i}>{moves.move.name}</div>
                )
              )}
            </div>

          </div>
        </div>
      }
    </div>
  );
}

export default PokemonDetail;