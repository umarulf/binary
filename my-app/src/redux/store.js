import { createStore } from "redux";
import binarySearchReducer from "./reducers";

const store = createStore(binarySearchReducer);

export default store;
