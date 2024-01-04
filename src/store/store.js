import { createStore } from "redux";
import { compose, applyMiddleware } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import logger from "redux-logger";
import { thunk } from "redux-thunk";

import createSagaMiddleware from 'redux-saga';

import { rootReducer } from "./root-reducer";
import { rootSaga } from "./user/root-saga";




const sagaMiddleware = createSagaMiddleware()  //saga middleware;



//const middlewares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean);

const middleWares = [
    process.env.NODE_ENV === 'development' && logger,
    sagaMiddleware,
  ].filter(Boolean);


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] ,//only cart will be persisted
    //blacklist: ['user'] //user will not be persisted

};


const composeEnhancer =
(process.env.NODE_ENV !== 'production' &&
window &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
compose;


const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares ))


//root-reducer is the base reducer object that represents all of the state of our application
export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);