import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
// import logger from "redux-logger";
import rootReducer from "./reducers/rootReducer";
import { rootSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const composeEnhancers =  compose;


// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));


sagaMiddleware.run(rootSaga);

// export default store;
