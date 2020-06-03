import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from './moviesTable';
import  ListGroup  from "./common/listGroup";
import Pagination from './common/pagination';
import {paginate} from '../utils/paginate';
import _ from 'lodash';

class Movie extends Component {
   state = { 
      movies:[],
      genres:[],
      pageSize:4,
      currentPage:1,
      sortColumn : {path:'title',order:'asc'}

    };

    componentDidMount(){
       const genres = [{_id : '', name: 'All Genres'},...getGenres()];
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
  handleSort = sortColumn => {
 
this.setState({sortColumn});
  }

   render() { 
const {length:count} = this.state.movies;
const {pageSize,currentPage,movies:allMovies,selectedGenre,sortColumn} = this.state;

const filtered =  selectedGenre && selectedGenre._id ? allMovies.filter(m  => m.genre._id === selectedGenre._id) : allMovies;
const sorted = _.orderBy(filtered,[sortColumn.path],[sortColumn.order])

const movies = paginate(sorted,currentPage,pageSize);


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

<MoviesTable
movies = {movies}
sortColumn = {sortColumn}
onDelete = {this.deleteMovie}
onLike = {this.handleLike}
onSort = {this.handleSort}
/>

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