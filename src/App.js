import React,{Component} from 'react';
import './App.css';
import { getMovies } from "./services/fakeMovieService";

class App extends Component {
 state = {
   movies: []
 }
 componentDidMount(){
 const movies = getMovies();
  this.setState({movies});
  }
  

constructor(){
  super();
  console.log('App - Constructor');
  // this.state = this.props.something;
}


  render() { 
    console.log('App - Rendered');
  
    return (
      <React.Fragment>

<main className="container">
<div>Hi Man</div>
</main>
</React.Fragment>
      );
  }
}
 
export default App;
