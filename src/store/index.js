// == Import : npm
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

// == Import : local
import reducerBase from 'src/store/reducer';
import authentication from './authentication.reducer';
import logMiddleware from './logMiddleware';

// == Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(logMiddleware),
);

const reducer = combineReducers({
  authentication,
  reducerBase,
});

const store = createStore(
  reducer,
  enhancers,
);

// == Export
export default store;
