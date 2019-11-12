/// external modules ///
import React from 'react';
import axios from 'axios';

/***************************************
  COMPONENTS
***************************************/
/*------------------
  MovieList (main)
------------------*/
const MovieList = (props) => {
  /// state ///
  const [movies , setMovies] = React.useState ([]);
  
  /// effects ///
  React.useEffect (() => {
    const getMovies = () => {
      axios
        .get ('http://localhost:5000/api/movies')
        .then (response => {
          setMovies (response.data);
        })
        .catch (error => {
          console.error ('Server Error' , error);
        });
    }
    
    getMovies ();
  } , []);
  
  /// thing ///
  return (
    <div className="movie-list">
      {movies.map (movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

/*------------------
  MovieDetails
------------------*/
function MovieDetails ({ movie }) {
  /// states ///
  const { title , director , metascore , stars } = movie;
  
  /// this ///
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map (star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
}

/**************************************/
export default MovieList;
