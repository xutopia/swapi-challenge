import React from 'react';


const Movie = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.releaseDate}</h3>
    </div>
  );
}



export default Movie;
