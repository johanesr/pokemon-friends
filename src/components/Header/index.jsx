import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function Header() {
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <>
      <header>
        <Link to="/">
          <img
            className="logo-pokemon"
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
            alt="Pokemon-Logo"/>
        </Link>

        <div className="toggle-button" onClick={() => {setOpenBurger(openBurger ? false : true )}}>
          <div className={`${openBurger ? 'bar1open' : 'bar1'}`}></div>
          <div className={`${openBurger ? 'bar2open' : 'bar2'}`}></div>
          <div className={`${openBurger ? 'bar3open' : 'bar3'}`}></div>
        </div>

        <nav>
          <ul className={openBurger ? 'open' : ''}>
            <li><Link to="/list">Pokemon List</Link></li>
            <li><Link to="/mylist">My Pokemons</Link></li>
          </ul>
        </nav>

        <hr/>

      </header>
    </>
  );
}

export default Header;