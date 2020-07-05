import React from 'react'

const Lists = (props) => {

    return (
        <div>
          {props.lists.map(list => <ul key={list.id}>{list.name}</ul>)}
        </div>
    )
}

export default Lists;

