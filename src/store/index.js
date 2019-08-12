// == Import : npm
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';

// == Import : local
import reducerBase from 'src/store/reducer';
import alerts from './alert.reducer';
import authentication from './authentication.reducer';
import comments from './comment.reducer';
import events from './event.reducer';
import groups from './group.reducer';
import guests from './guest.reducer';
import logMiddleware from './logMiddleware';

// == Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(logMiddleware),
);

const reducer = combineReducers({
  alerts,
  authentication,
  comments,
  events,
  groups,
  guests,
  reducerBase,
});

const store = createStore(
  reducer,
  enhancers,
);

// == Export
export default store;
