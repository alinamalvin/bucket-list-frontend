export default function listReducer(state = {lists: []}, action ) {
    switch (action.type) {

        case 'FETCH_LISTS':
          return {lists: action.payload} 
        case  'ADD_LIST':
          return {...state, lists: [...state.lists, action.payload]}
            // ...state,
            // astronauts: [...state.astronauts],
            // requesting: true
     
        // case 'ADD_ASTRONAUTS':
        //   return {
        //     ...state,
        //     astronauts: action.astronauts,
        //     requesting: false
        //   }
     
        default:
           return state;
    }
}