import React from "react";
import "./App.css";
import MainComponent from "./components/MainComponent";
import UserProfile from "./components/UserProfile";
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainComponent />
        </Route>
        <Route
          exact
          path="/users/:login"
          render={({ match }) => <UserProfile login={match.params.login} />}
        />
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
