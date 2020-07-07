import React from 'react'
import {Redirect} from 'react-router-dom'

const List = (props) => {

     let list = props.lists[props.match.params.id - 1]
     console.log(list)

    return (
        <h2>
            {/* {list ? null : <Redirect to='/lists'/>}  */}
            {list ? list.name : null}
        </h2>
    )
}

export default List


