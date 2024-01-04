import { createStore } from "redux";
import { compose, applyMiddleware } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import logger from "redux-logger";

import { rootReducer } from "./root-reducer";


const persistConfig = {
    key: 'root',
    storage,
    //whitelist: ['cart'] ,//only cart will be persisted
    blacklist: ['user'] //user will not be persisted
    

};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const middlewares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares ))


//root-reducer is the base reducer object that represents all of the state of our application
export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);