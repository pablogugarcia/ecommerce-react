import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducers from './root-reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducers, applyMiddleware(...middlewares));
export const persistor = persistStore(store);