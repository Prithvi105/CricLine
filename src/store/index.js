import { createStore } from "redux"

const initialState = {
    team1: '',
    team2: '',
    overs :0
    
};
const reducer = (state = initialState,action) => {
    switch(action.type){
        case "SET_TEAM_NAMES"  : 
        return {
            ...state,
            team1: action.payload.team1,
            team2: action.payload.team2,
            overs: action.payload.overs
          };
        default:
          return state;
      }
}

const store = createStore(reducer);

export default store;
