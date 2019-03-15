import React from 'react'
import { Image, Container } from "semantic-ui-react";
import '../App.css';
import Paper  from '../paper.png'
import Rock from '../rock.png'
import Scissors from '../scissors.jpeg'


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
        return { option: "You Win!", computer: rand, user: choice, win: + 1,  }
        
      }
      if (rand == "paper"){
        return { option: "You Lose!", computer: rand, user: choice, lose: + 1, }
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
        return { option: "You Win!", computer: rand, user: choice, win: + 1,  }

      }
      if (rand == "scissors"){
        return { option: "You Lose!", computer: rand, user: choice, lose: + 1 }
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
        return { option: "You Win", computer: rand, user: choice, win: + 1, }
      }
      if (rand == "rock"){
        return { option: 'You Lose', computer: rand, user: choice,  lose: + 1}
      }
    }) 
  }
  render(){
    return(
    <header>
    <body className='body'>

          <Container style={{display: 'flex', flexDirection: 'row', justifyContent: 'center',  }}>
              <Image src={Rock} onClick={(e) => this.handleRock(e)}/>
              <Image src={Paper} onClick={(e) => this.handlePaper(e)}/>
              <Image src={Scissors} onClick={(e) => this.handleScissors(e)}/>
          </Container >
      <p style={{ color: 'white', fontSize: 30, display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor:'black'}}>{this.state.option}</p>
      <p style={{ color: 'white', fontSize: 30, display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor:'black'}}>You Chose-{this.state.user}</p>
      <p style={{ color: 'white', fontSize: 30, display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor:'black'}}>Computer Chose-{this.state.computer}</p>
      <p style={{ color: 'white', fontSize: 30, display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor:'black'}}>Your score-{this.state.win}</p>
      <p style={{ color: 'white', fontSize: 30, display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor:'black'}}>Computer's score-{this.state.lose}</p>

    </body>

    </header>

    )
  }    
}
export default Game; 
  
  

  

  
  

 

  


  





    
      
      
      
  

  




    
    

