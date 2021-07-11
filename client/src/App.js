import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Home from './components/Home';
import Details from './components/Details';
import NewPokemon from './components/NewPokemon';
import NavBar from './components/NavBar';

import { navLink, Link } from 'react-router-dom';

function App () {
  
    return (  

      <Router>      
        <div className="App">  
            <Route path="/" exact component={Landing} />                   
        <NavBar />  
          <Switch>      
              <Route path="/home" exact component={Home} />
              <Route path="/details" exact component={Details} />
              <Route path="/newpokemon" exact component={NewPokemon} /> 
          </Switch>  
          
        </div>
      </Router>
      
    );  
}

export default App;
