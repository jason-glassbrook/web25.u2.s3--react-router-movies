/// external modules ///
import React from 'react';
import axios from 'axios';

/// internal modules ///
import MovieCard from './MovieCard';

/***************************************
  COMPONENTS
***************************************/
const Movie = (props) => {
  /// states ///
  const [id , setId] = React.useState (props.match.params["id"]);
  const [movie , setMovie] = React.useState ();

  /// effects ///
  React.useEffect (() => {
    axios
      .get (`http://localhost:5000/api/movies/${id}`)
      .then ((response) => {
        setMovie (response.data);
      })
      .catch ((error) => {
        console.error (error);
      });
  } , [id]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList (movie)
  // }

  /// this ///
  if (movie === undefined) {
    return (
      <div className="loading">Loading movie information...</div>
    );
  } else {
    return (
      <MovieCard movie={movie}/>
    );
  }
}

/**************************************/
export default Movie;
