import './App.css';
import React from 'react';
import Landing from './components/Landing';
import Home from './components/Home';
import Details from './components/Details';
import NewPokemon from './components/NewPokemon';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';

function App () {
  
    return (        
        <div className="App">  
            <NavBar></NavBar>
          <Switch>      
            <Route path="/home" exact component={Home} />
            <Route path="/details" exact component={Details} />
            <Route path="/newpokemon" exact component={NewPokemon} /> 
            <Route path="/" exact component={Landing} />  
          </Switch>          
        </div>     
    );  
}    

export default App;
