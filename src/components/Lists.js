import React from 'react'
import List from './List'

const Lists = (props) => {

    return (
        <div>
          {props.lists.map(list => 
          <ul key={list.id}><List list={list}/></ul>)}
        </div>
    )
}

export default Lists;

