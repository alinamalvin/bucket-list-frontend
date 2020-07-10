import React, { Component } from 'react'
import {connect} from 'react-redux'
// import {Select} from 'react-select';
import fetchCountries from '../actions/fetchCountries'
import addCountryToList from '../actions/addCountryToList'
// import {uid} from 'react-uid'

class CountriesSelector extends Component {

    state = {
        name: 'Andorra'
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('handleSubmit called actionCreator')
        console.log(this.state) // Output: {name: "Andorra"} 
        console.log(this.props.list.id) // Output: 10
        this.props.addCountryToList(this.state, this.props.list.id)
        this.setState({
            name: 'Andorra'
        })
    }

    componentDidMount(){
        this.props.fetchCountries()
  }
   
    render() { 
        // console.log(this.props.list && this.props.list.id)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Choose Country:</label> 
                    <select name="name" value={this.state.name} onChange={this.handleChange} > 
                    {this.props.countries.map((country, index) => 
                    <option key={index} name={country.name}>{country.name}</option>)}
                    {/* {this.props.countries.map(country => 
                    <option key={country.id} name={country.name}>{country.name}</option>)} */}
                     </select> 
                     <input type="submit" />
             </form> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        countries: state.countries.countries
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchCountries: () => dispatch(fetchCountries()),
      addCountryToList: (country, listId) => dispatch(addCountryToList(country, listId))
    } 
}

  export default connect(mapStateToProps, mapDispatchToProps) (CountriesSelector)
