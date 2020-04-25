import React from 'react';
import './App.css';
import { getMovies } from "./services/fakeMovieService";

function App() {

  let myMovie = getMovies();

  const handleDelete = (movie) => {
    console.log(movie);

  } 

const myRenderer = () => {
  return (myMovie.length === 0) ? 'No Movie' : myMovie.length + " Available";
}
  return (
<main className="container">

<h1>{myRenderer()}</h1>

<table className="table">
 <thead>
<th>title</th>
<th>Genre</th>
<th>Stock</th>
<th>Rate</th>
<th></th>
 </thead>
 <tbody>

{myMovie.map(movie => 
  <tr key={movie._id}> 
    <td>{movie.title}</td>
    <td>{movie.genre.name}</td>
    <td>{movie.numberInStock}</td>
    <td>{movie.dailyRentalRate}</td>
    <td className="btn btn-danger" onClick={() => handleDelete(movie)}> DELETE</td>
  </tr>
  
  )} 
   <td>

 
   </td>
 </tbody>

</table>

</main>
  );
}

export default App;
