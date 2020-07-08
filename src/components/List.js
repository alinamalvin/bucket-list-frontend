import React from 'react'
import {Redirect} from 'react-router-dom'
import CountriesContainer from '../containers/CountriesContainer'

const List = (props) => {

     let list = props.lists[props.match.params.id - 1]

    return (
        <div>
        <h2>
            {/* {list ? null : <Redirect to='/lists'/>}  */}
            {list ? list.name : null}
        </h2>
        <CountriesContainer list={list}/>
        </div>
    )
}

export default List


