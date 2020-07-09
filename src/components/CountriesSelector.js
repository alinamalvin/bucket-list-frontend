import React, { Component } from 'react'
 import {connect} from 'react-redux'
// import {Select} from 'react-select';
import fetchCountries from '../actions/fetchCountries'

class CountriesSelector extends Component {

    state = {
        name: ''
    }

    handleChange = () => {

    }

    componentDidMount(){
        this.props.fetchCountries()
  }
   
    render() { 
        return (
            <div>
                <form>
                    <label>Choose Country:</label> 
                    <select> 
                    {this.props.countries.map(country => 
                    <option key={country.id} name={country.name}>{country.name}</option>)}
                     </select> 
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
      fetchCountries: () => dispatch(fetchCountries())
    } 
}

  export default connect(mapStateToProps, mapDispatchToProps) (CountriesSelector)
