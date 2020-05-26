import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import  Like  from "./common/like";

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

handleLike = (movie) => {
 const movies = [...this.state.movies];
  const index =  movies.indexOf(movie);
movies[index] = {...movies[index]};
movies[index].liked = !movies[index].liked;
  this.setState({movies}); 
}

    
   render() { 
      return ( 

<div>
<h3>{this.handleLenght()}</h3>
<table className="container table">
   <tr>
      <th>Title</th>
      <th>Genre</th>
      <th>Stock</th>
      <th>Rate</th>
      <th></th>
      <th></th>
   </tr>
   <tbody>
    
         {this.state.movies.map(item => 
      <tr key={item._id}>
  <td >{item.title}</td>
         <td >{item.genre.name}</td>
         <td >{item.numberInStock}</td> 
         <td >{item.dailyRentalRate}</td> 
         <td>
            <Like liked={item.liked} onClick={() => this.handleLike(item)}/>
         </td>
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