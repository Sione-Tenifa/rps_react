import React, { Component } from 'react';
import { Button,} from "semantic-ui-react";
import Game from './Game'
import './App.css';
import './rock.png';

class App extends Component {


  state = { 
    games: [ 
      {id: 1, name: "rock", },
      {id: 2, name: "paper", },
      {id: 3, name: "scissors",} 
    ]
      
   }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Rock, Paper, Scissors 
        </header>

          <Game games={this.state.games}/>


      
          
      </div>
    );
  }
}

export default App;
