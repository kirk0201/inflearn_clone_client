import { createStore } from "redux"; // store를 만드는 api
import { combineReducers } from "redux"; // reducers를 하나로 묶는 api

const rootReducer = combineReducers({}); //reducers는 묶어서 하나로 만든 reducer => modules를 모아놓음
const store = createStore(rootReducer);

export default store;
