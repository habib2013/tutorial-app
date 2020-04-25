import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

export class Movie extends Component {
   state = {
movies : getMovies()
     };
   
     myRenderer = () => {
      return (this.state.movies.length === 0) ? 'No Movie' : this.state.movies.length + " Available";
    }   
  
     handleDelete = (movie) => {
      console.log(movie);
  const movies = this.state.movies.filter(m => m._id !== movie._id);   
  this.setState({movies});
  
    } 

   render() { 
      return (  
<main className="container">

<h1>{this.myRenderer()}</h1>

<table className="table">
 <thead>
<th>title</th>
<th>Genre</th>
<th>Stock</th>
<th>Rate</th>
<th></th>
 </thead>
 <tbody>

{this.state.movies.map(movie => 
  <tr key={movie._id}> 
    <td>{movie.title}</td>
    <td>{movie.genre.name}</td>
    <td>{movie.numberInStock}</td>
    <td>{movie.dailyRentalRate}</td>
    <td className="btn btn-danger" onClick={() => this.handleDelete(movie)}> DELETE</td>
  </tr>
  
  )} 
   <td>

 
   </td>
 </tbody>

</table>

</main>

      );
   }
}
 
