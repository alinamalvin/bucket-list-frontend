import { combineReducers } from "redux";
 
const rootReducer = combineReducers({
  lists: listsReducer,
  countries: countriesReducer
});
 
export default rootReducer;
 
function listsReducer(state = {lists: []}, action) {
    switch (action.type) {
    case 'FETCH_LISTS':
        return {lists: action.payload} 
      case  'ADD_LIST':
        return {...state, lists: [...state.lists, action.payload]}
        default:
           return state;
    }
}
 
function countriesReducer(state = {countries: []}, action) {
    switch (action.type) {
    case 'FETCH_COUNTRIES':
        return {countries: action.payload} 

      default:
         return state;
  }
}