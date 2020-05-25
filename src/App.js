import React,{Component} from 'react';
import './App.css';
// import { getMovies } from "./services/fakeMovieService";
import NavBar from "./Components/navbar";
import Counters from './Components/counters';

class App extends Component {
  state = {  }
  render() { 
    return (
      <React.Fragment>
<NavBar/>
<main className="container">
<Counters/>  
</main>
</React.Fragment>
      );
  }
}
 
export default App;
