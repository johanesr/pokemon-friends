import './styles.scss';

function Header() {
  return (
    <div className="header-wrapper">
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="Pokemon-Logo"/>
      <div>My Favorite Pokemons</div>
      <hr/>
    </div>
  );
}

export default Header;