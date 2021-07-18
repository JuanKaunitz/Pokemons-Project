import {
  GET_ALL_POKEMONS,
  ADD_NEW_POKE,
  SEARCH_POKE,
  GET_TYPE,
  GET_POKE_ID,
  az,
  za,
  ASC,
  DESC,
  FILTER,
} from "../constants";

const initialState = { 
  originalPokes: [],      
  getPokes: [], 
  addPoke: {}, 
  searchPoke: [],
  getTypes: [], 
  getDetails: [],    
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
    case az:      
      const res = state.getPokes.sort((a, b) => {
        const poke1 = a.name.toUpperCase();
        const poke2 = b.name.toUpperCase();
        if(poke1 < poke2) {
          return -1
        }
        if(poke1 > poke2) {
          return 1
        } else {
          return 0
        }
      })      
      
      return {
        ...state,        
        getPokes: [...res],
      };

    case ASC:
     const res3 = state.getPokes.sort((a, b) =>  a.attack - b.attack);     
      return {
        ...state,        
        getPokes: [...res3],
      };
    case za:
      const res2 = state.getPokes.sort((a, b) => {
        const poke1 = a.name.toUpperCase();
        const poke2 = b.name.toUpperCase();
        if(poke1 > poke2) {
          return -1
        }
        if(poke1 < poke2) {
          return 1
        } else {
          return 0
        }
      })      
      return {
        ...state,        
        getPokes: [...res2],
      };
    case DESC:
      const res4 = state.getPokes.sort((a, b) =>  b.attack - a.attack);     
      return {
        ...state,        
        getPokes: [...res4],
      };
    case FILTER:
      if(action.payload === 'null') {
        return {
          ...state,
          getPokes: state.originalPokes
        }
      };
      state.originalPokes = state.getPokes;
      const filter = state.getPokes.filter(poke => poke.type.includes(action.payload));
      console.log(filter)
      return {
        ...state,
       // getPokes: [...filter] 
      };

    default:
      return state;
  }
};

export default rootReducer;