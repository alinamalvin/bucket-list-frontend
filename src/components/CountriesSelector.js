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
                  {/* {this.props.countries.map(country => 
          <ul key={country.id}>{country.name}</ul>)} */}
               {/* <ul>{this.props.countries.map(country => country.name)}</ul>  */}
                {/* <form>
                    <label>Choose Country:</label> */}
                    {/* <select> 
                        <option></option>
                     </select> */}
                {/* </form> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        countries: state.countries
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchCountries: () => dispatch(fetchCountries())
    } 
}

  export default connect(mapStateToProps, mapDispatchToProps) (CountriesSelector)
