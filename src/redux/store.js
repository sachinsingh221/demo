import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
// import { history } from 'react-router';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from "history";
import rootReducers from './root-reducer';
import rootSaga from './root-saga';

export const history = createBrowserHistory();
const historyRouterMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware,historyRouterMiddleware];
const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const store = createStore( rootReducers, bindMiddleware(middlewares));
sagaMiddleware.run(rootSaga)
export { store };