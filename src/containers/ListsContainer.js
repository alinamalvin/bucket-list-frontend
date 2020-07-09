import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import Lists from '../components/Lists'
import List from '../components/List'
import ListInput from '../components/ListInput'
import fetchLists from '../actions/fetchLists'

class ListsContainer extends Component {

    componentDidMount(){
          this.props.fetchLists()
    }

    render() {
        return (
            <div>
                     <Route path='/lists/new' component={ListInput}/>
                     <Route path='/lists/:id' render={(routerProps) => <List {...routerProps} lists={this.props.lists}/>}/>
                     <Route exact path='/lists' render={(routerProps) => <Lists {...routerProps} lists={this.props.lists}/>}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lists: state.lists.lists
    }
}


export default connect(mapStateToProps, {fetchLists})(ListsContainer)
