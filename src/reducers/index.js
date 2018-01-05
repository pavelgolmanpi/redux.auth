import { combineReducers } from 'redux';
import headerReducer from './header';
import calledOnceReducer from './CalledOnce';
//import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  headerReducer: headerReducer,
  calledOnceReducer: calledOnceReducer
});

export default rootReducer;
