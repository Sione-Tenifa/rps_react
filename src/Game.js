import React from 'react'
import { Button, Table, } from "semantic-ui-react";
import './App.css';
import Rock from './rock.png'


class Game extends React.Component{
  
  
  

  handleRock = () => {
    var choices = ["rock", "paper", "scissors"]

    var choice = "rock";
    var rand = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById('two').innerHTML = "User: " + choice + ' ' + "Computer: " + rand
  
    if (choice == rand){
      document.getElementById('one').innerHTML = 'Its a tie!';
      return { showClock: !state.showClock, }
    }
    if (rand == "scissors") {
      document.getElementById('one').innerHTML = 'You Win!';
      return { showClock: !state.showClock, }
    }
    if (rand == "paper"){
      document.getElementById('one').innerHTML = 'You lose';
      return { showClock: !state.showClock, }
    }
    
    
  }

  handlePaper = () => {

  }

  handleScissors = () => {

  }
  render(){
    return(
    <header className='App-header'>
      <Table.Row>
        <Table.Cell>
          <Button onClick={(e) => this.handleRock(e)}> Rock </Button>
  
  
          <Button onClick={(e) => this.handlePaper(e)}> Paper </Button>

  
          <Button onClick={(e) => this.handleScissors(e)}> Scissors </Button>

  
        </Table.Cell>
      </Table.Row> 
    </header>

    )
  }
  
 

  


}



export default Game; 
