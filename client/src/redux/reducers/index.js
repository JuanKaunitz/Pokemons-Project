import {
  GET_ALL_POKEMONS,
  ADD_NEW_POKE,
  SEARCH_POKE,
  GET_TYPE,
  GET_POKE_ID,
} from "../constants";

const initialState = {
  getPokes: [], 
  addPoke: {}, 
  searchPoke: [],
  getTypes: [], 
  getDetails: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        getPokes: action.payload,
      };

    case ADD_NEW_POKE:
      return {
        ...state,
        addPoke: action.payload,
      };

    case SEARCH_POKE:
      console.log(action.payload)
      return {
        ...state,
        searchPoke: action.payload,        
      };

    case GET_TYPE:
      return {
        ...state,
        getTypes: action.payload,
      };
    case GET_POKE_ID:
      return {
        ...state,
        getDetails: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;