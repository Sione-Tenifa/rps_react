import React, { Fragment } from 'react';
import { Container,} from "semantic-ui-react";
import { Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar'
import Game from "./components/Game";
import NoMatch from './components/NoMatch'


const App = () => (

    <Fragment>
    < Navbar/> 
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/about' component={About}/>
          <Route exact path="/game" component={Game} />
          <Route component={NoMatch}/>
        </Switch>
      </Container>
    </Fragment>

        
)

export default App;
  
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           Rock, Paper, Scissors 
//         </header>

//           <Game games={this.state.games}/>


      
          
//       </div>
//     );
//   }
// }


