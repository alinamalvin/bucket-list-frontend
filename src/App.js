import React from 'react';
import {connect} from 'react-redux'
import './App.css';
import ListsContainer from './containers/ListsContainer'



class App extends React.Component {


  render() {
   return (
    <div className="App">
      <ListsContainer/>
    </div>
    );
  }
}

export default connect(null)(App);
