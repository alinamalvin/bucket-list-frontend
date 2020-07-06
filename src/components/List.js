import React from 'react'

const List = (props) => {
    console.log(props)

    let list = props.lists[props.match.params.id - 1]

    return (
        <div>
            {list ? list.name : null}
        </div>
    )
}

export default List


