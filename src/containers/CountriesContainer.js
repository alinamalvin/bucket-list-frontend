import React, { Component } from 'react'
import {connect} from 'react-redux'
import CountriesSelector from '../components/CountriesSelector'
import fetchCountries from '../actions/fetchCountries'
import Countries from '../components/Countries'


class CountriesContainer extends Component {
    // componentDidMount(){
    //     this.props.fetchCountries()
//   }
    render() {
        return (
            <div>
                <CountriesSelector /> 
                <Countries countries={this.props.list && this.props.list.countries}/> 
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         countries: state.countries
//     }
// }

// export default connect(mapStateToProps, {fetchCountries})(CountriesContainer)
export default CountriesContainer
