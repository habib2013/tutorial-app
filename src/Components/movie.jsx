import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService'

class Movie extends Component {
   state = { 
      movies:getMovies(),
    };

deleteMovie = (movie) => {
   const movies = this.state.movies.filter(m => m._id !== movie._id);
   this.setState({movies});
// console.log(product);
}

handleLenght = () => {
  return (this.state.movies.length === 0) ? 'No movie here' : this.state.movies.length + " Found" 
}
    
   render() { 
      return ( 

<div>
<h3>{this.handleLenght()}</h3>
<table className="table">
   <tr>
      <th>Title</th>
      <th>Genre</th>
      <th>Stock</th>
      <th>Rate</th>
      <th></th>
   </tr>
   <tbody>
    
         {this.state.movies.map(item => 
      <tr key={item._id}>
  <td >{item.title}</td>
         <td >{item.genre.name}</td>
         <td >{item.numberInStock}</td> 
         <td >{item.dailyRentalRate}</td> 
          <td><button className="btn btn-danger" onClick={()=> this.deleteMovie(item)}>DELETE</button></td>  
            </tr>
         )}
   </tbody>
</table>

</div>
       );
   }
}
 
export default Movie;