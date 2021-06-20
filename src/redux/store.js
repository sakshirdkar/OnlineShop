import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

const middleware = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);

