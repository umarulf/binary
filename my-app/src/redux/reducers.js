import {
  SET_ARRAY,
  SEARCH_RESULT,
  SET_ITERATIONS,
  SET_ELAPSED_TIME,
} from "./actions";

const initialState = {
  array: [],
  searchResult: "",
  iterations: 0,
  elapsedTime: 0,
};

const binarySearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARRAY:
      return {
        ...state,
        array: action.payload,
      };
    case SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.payload,
      };
    case SET_ITERATIONS:
      return {
        ...state,
        iterations: action.payload,
      };
    case SET_ELAPSED_TIME:
      return {
        ...state,
        elapsedTime: action.payload,
      };
    default:
      return state;
  }
};

export default binarySearchReducer;
