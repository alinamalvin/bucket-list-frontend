export default function fetchLists() {
    return (dispatch) => {
        dispatch({ type: 'ALL_LISTS'});
// request info from this resource, it is GET method by default
    fetch('http://localhost:3000/lists')
//return value of the above request is passed as argument to function below and converted to json
    .then(resp => resp.json())
// return value of the above function is a json version of the response, it is passed as argument to function below
// we will never go the this function until the response is converted to json
    .then(lists =>dispatch({type: 'ALL_LISTS, lists'}))
    };
}