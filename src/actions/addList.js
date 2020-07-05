export const addList = (data) => {
    return (dispatch) => {
        // fetch('http://localhost:3000/lists')
        // .then(response => response.json())
        // .then(data => dispatch({type: 'ADD_LIST', lists: data.name}));
        fetch('http://localhost:3000/lists', {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(list => dispatch({type: 'ADD_LIST', payload: list}))
    }
}
