import { createStore } from "redux";
import { userReducer } from "./users/usersReducer";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

const store = createStore(userReducer, applyMiddleware(thunk));

export default store;
