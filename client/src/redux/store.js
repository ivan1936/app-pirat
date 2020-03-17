import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

///export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middlewares),
  // other store enhancers if any
));
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistStore };
