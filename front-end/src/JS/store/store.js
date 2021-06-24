import { createStore, applyMiddleware, compose } from "redux";
import { reducerUser } from "../reducers/reducerUser";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// if we have many Middlewares
// const arr =[thunk, midl1, midl2]
const store = createStore(
  reducerUser,
  composeEnhancers(applyMiddleware(thunk))
  //   applyMiddleware(...arr)
);

export default store;
