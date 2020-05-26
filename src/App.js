import React,{Component} from 'react';
import './App.css';
// import { getMovies } from "./services/fakeMovieService";
import NavBar from "./Components/navbar";
import Counters from './Components/counters';

class App extends Component {
  state = {  
    counters: [
       {id:1,value:4},
       {id:2,value:7},
       {id:3,value:0},
       {id:4,value:9},
    ]
 };

constructor(){
  super();
  console.log('App - Constructor');
  // this.state = this.props.something;
}

componentDidMount(){
console.log('App - Mounted');
}


handleIncrement = counter => {
const counters = [...this.state.counters];
const index = counters.indexOf(counter);
counters[index] = {...counter};
counters[index].value++;
this.setState({counters});

}

handleDecrement = counter => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counter};
  counters[index].value--;
  this.setState({counters});
  
  }

handleDelete = (counterId) => {
const counters = this.state.counters.filter(c => c.id !== counterId);
this.setState({counters});
}
handleReset = () => {
const counters = this.state.counters.map(c => {
    c.value = 0;
    return c;
 });
 this.setState({counters});
}

  render() { 
    console.log('App - Rendered');
  
    return (
      <React.Fragment>
<NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
<main className="container">
<Counters
counters = {this.state.counters}
 onReset={this.handleReset}
onIncrement = {this.handleIncrement}
onDecrement = {this.handleDecrement}
onDelete = {this.handleDelete}
/>  
</main>
</React.Fragment>
      );
  }
}
 
export default App;
