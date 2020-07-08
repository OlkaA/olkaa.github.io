import React from 'react';
import './App.css';
import {
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import ListOfChildren from './components/ListOfChildren';
import CheckIn from './components/CheckIn';
import CheckOut from './components/CheckOut';

function App() {
  return (
      <Router basename="/projects/famly/build">
        <Switch>
          <Route exact path='/'>
            <ListOfChildren />
          </Route>
          <Route exact path='/in/:id' render={({ match }) => <CheckIn id={match.params.id} />}>
          </Route>
          <Route exact path='/out/:id' render={({ match }) => <CheckOut id={match.params.id} />}>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
