import React from 'react';
import './App.css';
import {
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Carousel from './components/carousel/carousel';

function App() {
  return (
    <Router basename="/projects/ocean/build">
      <Route exact path='/'>
        <div className="App">
          <header className="App-header">
            <h1>Ocean</h1>
            <Carousel/>
          </header>
        </div>
    </Route>
    </Router>
  );
}

export default App;
