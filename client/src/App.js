import React from 'react';
import Saved from "./components/pages/Saved";
import Search from "./components/pages/Search";
import NoMatch from "./components/pages/NoMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/saved:id" component={Saved} />
          <Route component={NoMatch} /> 
        </Switch>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;

