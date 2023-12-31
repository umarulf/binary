export const SET_ARRAY = "SET_ARRAY";
export const SEARCH_RESULT = "SEARCH_RESULT";
export const SET_ITERATIONS = "SET_ITERATIONS";
export const SET_ELAPSED_TIME = "SET_ELAPSED_TIME";

export const setArray = (array) => ({
  type: SET_ARRAY,
  payload: array,
});

export const setSearchResult = (result) => ({
  type: SEARCH_RESULT,
  payload: result,
});

export const setIterations = (iterations) => ({
  type: SET_ITERATIONS,
  payload: iterations,
});

export const setElapsedTime = (elapsedTime) => ({
  type: SET_ELAPSED_TIME,
  payload: elapsedTime,
});
