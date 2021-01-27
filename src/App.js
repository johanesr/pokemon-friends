import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from "./components/Header";

import PokemonList from './containers/PokemonList';
import PokemonDetail from './containers/PokemonDetail';

function App() {
  return (
    <BrowserRouter>

      <Header/>

      <Switch>
        <Route exact path="/">
          <PokemonList />
        </Route>
        <Route path="/list">
          <PokemonList />
        </Route>
        <Route  path="/detail/:pokemonName">
          <PokemonDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
