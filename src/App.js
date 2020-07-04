import React from 'react';
import {connect} from 'react-redux'
import './App.css';
import fetchLists from './actions/fetchLists'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchLists({type: 'FETCH_LISTS', payload: {name: 'WorldTrip'}})
   }

  render() {
   return (
    <div className="App">
      App
    </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     lists: state.lists
//   }
// }

export default connect(null, {fetchLists})(App);
