import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage";
import NotLogged from "./pages/notLogged";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/notlogged" component={NotLogged} />
        </Switch>
      </React.Fragment>
    </Router>
  )
}

export default App;

