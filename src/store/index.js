import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducres";

let middleware;
if (process.env.NODE_ENV === "development") {
  middleware = compose(applyMiddleware(thunk, logger));
} else {
  middleware = compose(applyMiddleware(thunk));
}
const store = createStore(rootReducer, middleware);

export default store;
