import React from 'react';
import { ListItem } from 'material-ui/List';


const Movie = (props) => {
  return (
    <div>
      <ListItem
        primaryText={props.title}
        secondaryText={props.releaseDate}
      />
    </div>
  );
}



export default Movie;
