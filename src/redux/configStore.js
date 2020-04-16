import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from '../reducers/rootReducers';
import rootSaga from '../sagas/rootSaga';

const composeEnhancers =
   process.env.NODE_ENV !== 'production' &&
   typeof window === 'object' &&
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
           shouldHotReload: false,
        })
      : compose;

const sagaMiddleware = createSagaMiddleware();

const configStore = () => {
   const middlewares = [sagaMiddleware];
   const enhancers = [applyMiddleware(...middlewares)];
   const store = createStore(rootReducers, composeEnhancers(...enhancers));
   sagaMiddleware.run(rootSaga);
   return store;
};

export default configStore;
