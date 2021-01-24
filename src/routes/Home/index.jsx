import {useState} from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';
import './styles.scss';

function Home() {
  const [pokemons, setPokemons] = useState([]);

  return (
    <div className="home-wrapper">
      <Header />
      <div className="search-field">
        <input type="search" placeholder="Search here..."/>
        <button type="button">Search</button>
      </div>
      <Card name="TEST" />
    </div>
  );
}

export default Home;