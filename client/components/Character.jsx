import React from 'react';
import Paper from 'material-ui/Paper';


const Character = (props) => {
  return (
    <Paper zDepth={props.depth || 1}>
      <h1>hello Character</h1>
    </Paper>
  );
}



export default Character;
