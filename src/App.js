import { Switch, Route, useRouteMatch } from 'react-router-dom';

import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

function App() {

  const match = useRouteMatch();
  // console.log('match URL: ', match)

  return (
    <div className="app">
      <div className="container" style={{ justifyContent: 'center'}}>
        <div className="text-center">
          <h1 className="my-3">Pokemon</h1>
          <p className="lead">Welcome to our Pokemon Api application!</p>
        </div>
        <Switch>
          <Route exact path={match.url}>
            <ListPage />
          </Route>
          <Route exact path={`${match.url}pokemon/:pokemonId`}>
            <DetailPage />
          </Route>
        </Switch>

      </div>
    </div>
  );
}

export default App;
