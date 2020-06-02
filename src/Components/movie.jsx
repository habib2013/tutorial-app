import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from "../services/fakeGenreService";
import  Like  from "./common/like";
import  ListGroup  from "./common/listGroup";
import Pagination from './common/pagination';
import {paginate} from '../utils/paginate';


class Movie extends Component {
   state = { 
      movies:[],
      genres:[],
      pageSize:4,
      currentPage:1

    };

    componentDidMount(){
       const genres = [{name: 'All Genres'},...getGenres()];
      this.setState({movies:getMovies(),genres})
    }

deleteMovie = (movie) => {
   const movies = this.state.movies.filter(m => m._id !== movie._id);
   this.setState({movies});
// console.log(product);
}

handleLenght = () => {
  return (this.state.movies.length === 0) ? 'No movie here' : this.state.movies.length + " movies Found" 
}

handlePageChange = page => {
this.setState({currentPage : page});
}

handleLike = (movie) => {
 const movies = [...this.state.movies]; //get the array
  const index =  movies.indexOf(movie); // get index from movie passed
movies[index] = {...movies[index]}; // copy the indexed array in an object
movies[index].liked = !movies[index].liked; //toggle between like/dislike
  this.setState({movies}); // change state
}

handleGenreSelect = genre => {
  this.setState({selectedGenre : genre,currentPage : 1});
}
  

   render() { 
const {length:count} = this.state.movies;
const {pageSize,currentPage,movies:allMovies,selectedGenre} = this.state;

const filtered =  selectedGenre && selectedGenre._id ? allMovies.filter(m  => m.genre._id === selectedGenre._id) : allMovies;
const movies = paginate(filtered,currentPage,pageSize);


      return ( 
   
<div className="container row pt-4 ml-3 mr-4 justify-content-center">
<div className="col-3">
<ListGroup
 items={this.state.genres}
 selectedItem = {this.state.selectedGenre}
onItemSelect={this.handleGenreSelect}

/>

</div>
<div className="col">

<h3> {filtered.length === 0 ? "No movies" : filtered.length + " movies "}  found in database</h3>
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
    
         {movies.map(item => 
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
<Pagination itemsCount={filtered.length}
 pageSize={pageSize} 
 onPageChange={this.handlePageChange}
 currentPage = {currentPage}
 />

</div>

</div>
       );
   }
}
 
export default Movie;