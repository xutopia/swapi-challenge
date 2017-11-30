import React from 'react';
import Paper from 'material-ui/Paper';


const Character = (props) => {
  return (
    <Paper
      zDepth={props.depth || 0}
      onClick={props.handleClick}
    >
      <h1>{props.name}</h1>
    </Paper>
  );
}



export default Character;
