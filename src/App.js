import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from "./components/Header";

import PokemonList from './routes/PokemonList';
import PokemonDetail from './routes/PokemonDetail';
import MyList from './routes/MyList';

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
        <Route  path="/my-list">
          <MyList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
