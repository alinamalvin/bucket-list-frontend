import React, { Component } from 'react'
import {connect} from 'react-redux'
import CountriesSelector from '../components/CountriesSelector'
import Countries from '../components/Countries'


class CountriesContainer extends Component {
    
    render() {
        return (
            <div>
                <CountriesSelector/> 
                <Countries countries={this.props.list && this.props.list.countries}/> 
            </div>
        )
    }
}

 export default CountriesContainer
