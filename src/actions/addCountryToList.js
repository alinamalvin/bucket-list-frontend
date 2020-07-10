const addCountryToList = (country, listId) => {
     console.log('actionCreator started to execute')
    return (dispatch) => {
        fetch(`http://localhost:3000/lists/${listId}/countries`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(country)
        })
        .then(resp => resp.json())
        .then(list => dispatch({type: 'ADD_COUNTRY', payload: list}))
    }

}

export default addCountryToList;
