import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

import './App.css';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
