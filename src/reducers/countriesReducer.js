export default function countriesReducer(state = {countries: []}, action ) {
    switch (action.type) {

        case 'FETCH_COUNTRIES':
          return {countries: action.payload} 
     
        default:
           return state;
    }
}