import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import CountriesSelector from '../components/CountriesSelector'
import Countries from '../components/Countries'


class CountriesContainer extends Component {
    
    render() {
        return (
            <div>
                <CountriesSelector list={this.props.list}/> 
                <Countries countries={this.props.list && this.props.list.countries}/> 
                {/* <Route exact path='/lists/:id/countries' render={(routerProps) => <Countries {...routerProps} countries={this.props.list && this.props.list.countries}/>}/> */}
            </div>
        )
    }
}

 export default CountriesContainer
