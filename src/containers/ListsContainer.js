import React, { Component } from 'react'
import {connect} from 'react-redux'
import Lists from '../components/Lists'
import ListInput from '../components/ListInput'
import fetchLists from '../actions/fetchLists'

class ListsContainer extends Component {

    componentDidMount(){
          this.props.fetchLists()
    }

    render() {
        return (
            <div>
                <ListInput/><br></br>
                <Lists lists={this.props.lists}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lists: state.lists
    }
}


export default connect(mapStateToProps, {fetchLists})(ListsContainer)
