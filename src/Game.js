import React from 'react'
import { Table, Image, Container } from "semantic-ui-react";
import './App.css';
import Paper from './paper.png'
import Rock from './rock.png'
import Scissors from './scissors.jpeg'


class Game extends React.Component{
  
  state = { option: ' ', computer: '', 
            user: '', win: 0, 
            lose: 0,}
  
  handleRock = () => {
    this.setState( state => {
      let choices = ["rock", "paper", "scissors"]
      let choice = "rock";
      let rand = choices[Math.floor(Math.random() * choices.length)];
      if (choice == rand){
        return { option: "TIE", computer: rand, user: choice, }
      }
      if (rand == "scissors") {
        return { option: "You Win!", computer: rand, user: choice,  }
      }
      if (rand == "paper"){
        return { option: "You Lose!", computer: rand, user: choice, }
      }
    }) 
  }
  handlePaper = () => {
    this.setState( state => {
      let choices = ["rock", "paper", "scissors"]
      let choice = "paper";
      let rand = choices[Math.floor(Math.random() * choices.length)];
      if (choice == rand){
        // return { option: "TIE" }
        return { option: "TIE", computer: rand, user: choice,   }

      }
      if (rand == "rock") {
        // return { option: "You Win" }
        return { option: "You Win!", computer: rand, user: choice,  }

      }
      if (rand == "scissors"){
        return { option: "You Lose!", computer: rand, user: choice,  }
      }
    }) 
  }

  handleScissors = () => {
    this.setState( state => {
      let choices = ["rock", "paper", "scissors"]
      let choice = "scissors";
      let rand = choices[Math.floor(Math.random() * choices.length)];
      if (choice == rand){
        return { option: "TIE", computer: rand, user: choice, }
      }
      if (rand == "paper") {
        return { option: "You Win", computer: rand, user: choice, }
      }
      if (rand == "rock"){
        return { option: 'You Lose', computer: rand, user: choice,  }
      }
    }) 
  }
  render(){
    return(
    <header className='App-header'>
      <Table.Row>
        <Table.Cell>
          {/* <Image src={Rock} onClick={(e) => this.handleRock(e)}/>
          <Image src={Paper} onClick={(e) => this.handlePaper(e)}/>
          <Image src={Scissors} onClick={(e) => this.handleScissors(e)}/> */}

          {/* <Button src={Rock} onClick={(e) => this.handleRock(e)}> Rock </Button>
          <Button src={Paper} onClick={(e) => this.handlePaper(e)}> Paper </Button>
          <Button src={Scissors} onClick={(e) => this.handleScissors(e)}> Scissors </Button> */}
        </Table.Cell>
      </Table.Row> 
          <Container style={{display: 'flex', flexDirection: 'row', justifyContent: 'center',  }}>
              <Image src={Rock} onClick={(e) => this.handleRock(e)}/>
              <Image src={Paper} onClick={(e) => this.handlePaper(e)}/>
              <Image src={Scissors} onClick={(e) => this.handleScissors(e)}/>
          </Container >

      <p>{this.state.option}</p>
      <p>You Chose-{this.state.user}</p>
      <p>Computer Chose-{this.state.computer}</p>

    </header>

    )
  }    
}
export default Game; 
  
  

  

  
  

 

  


  





    
      
      
      
  

  




    
    

