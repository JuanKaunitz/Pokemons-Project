
const initialState = {
  recipe: [],
  recipeDetail: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case '1':
      console.log(action.payload.data, "aaaa");
      return { ...state, recipe: action.payload.data };

    case '':
      return {
        ...state,
        recipeDetail: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}