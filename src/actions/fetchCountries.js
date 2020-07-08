export default function fetchCountries(action) {
    return (dispatch) => {
// request info from this resource, it is GET method by default
    fetch('http://localhost:3000/countries')
//return value of the above request is passed as argument to function below and converted to json
    .then(resp => resp.json())
// return value of the above function is a json version of the response, it is passed as argument to function below
// we will never go the this function until the response is converted to json
    .then(countries =>dispatch({
        type: 'FETCH_COUNTRIES', 
        payload: countries
    }))
    };
}