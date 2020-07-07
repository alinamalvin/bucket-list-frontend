import React from 'react'
import List from './List'
import {Route, Link} from 'react-router-dom'

const Lists = (props) => {

    return (
        <div>
          {props.lists.map(list => 
          <ul key={list.id}>
          <Link to={`/lists/${list.id}`}>{list.name}</Link> 
          </ul>)}
        </div>
    )
}

export default Lists;

