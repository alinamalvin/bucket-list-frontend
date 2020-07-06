import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addList} from '../actions/addList'

class ListInput extends Component {

    state = {name: ''}

    handleChange = (event) => {
       this.setState({
        [event.target.name]: event.target.value  
       })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addList(this.state)
        this.setState({name: ''})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Bucket List Name:</label>
                    <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}

export default connect(null, {addList})(ListInput)
