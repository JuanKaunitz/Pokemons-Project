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
  FILTER_MINE,
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
        originalPokes: action.payload,
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

      const filter = state.originalPokes.filter(poke => {
        
        for(let i=0; i < poke.types.length; i++) {
          if(poke.types[i].name === action.payload)  {
            return true
          } 
        }
        return false
      } );      
      
      return {
        ...state,
       getPokes: filter,
      };

      
      case FILTER_MINE: 
      if(action.payload === 'null') {
        return {
          ...state,
          getPokes: state.originalPokes
        } 
      };   
      let filterMine = []
      if(action.payload === 'dB') {
        filterMine = state.originalPokes.filter(poke => poke.mine === true);
        
      } else {
        filterMine = state.originalPokes.filter(poke => poke.mine === false);
      }      
      
      return {
        ...state,
       getPokes: filterMine,
      }

    default:
      return state;
  }
};

export default rootReducer;