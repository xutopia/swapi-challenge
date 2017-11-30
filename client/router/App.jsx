import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from '../containers/Landing.jsx';

const App = (props) => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
    </BrowserRouter>
  )
};

export default App;
