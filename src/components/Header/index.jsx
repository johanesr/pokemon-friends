import { useState } from 'react';
import './styles.scss';

function Header() {
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <>
      <header>
        <a href="">
          <img
            className="logo-pokemon"
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
            alt="Pokemon-Logo"/>
        </a>

        <div className="toggle-button" onClick={() => {setOpenBurger(openBurger ? false : true )}}>
          <div className={`bar1${openBurger ? 'open' : ''}`}></div>
          <div className={`bar2${openBurger ? 'open' : ''}`}></div>
          <div className={`bar3${openBurger ? 'open' : ''}`}></div>
        </div>

        <nav>
          <ul className={openBurger ? 'open' : ''}>
            <li><a href="/list">Pokemon List</a></li>
            <li><a href="/detail">Pokemon Detail</a></li>
            <li><a href="/mylist">My Pokemons</a></li>
          </ul>
        </nav>

      </header>
      <hr/>
    </>
  );
}

export default Header;