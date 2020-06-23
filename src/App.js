import React,{Component} from 'react';
import './App.css';
// import { getMovies } from "./services/fakeMovieService";


class App extends Component {


constructor(){
  super();
  console.log('App - Constructor');
  // this.state = this.props.something;
}

componentDidMount(){
console.log('App - Mounted');
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
