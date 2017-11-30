import React from 'react';
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid';


const Character = (props) => {
  return (
    <Col lg={3}>
      <Paper
        zDepth={props.depth || 0}
        onClick={props.handleClick}
      >
        <Row center="lg">
          <h1>{props.name}</h1>
        </Row>
      </Paper>
    </Col>
  );
}



export default Character;
