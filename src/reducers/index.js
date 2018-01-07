import { combineReducers } from 'redux';
import headerReducer from './header';
import calledOnceReducer from './CalledOnce';
import loginReducer from './login';
import logoutReducer from './logout';
//import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  headerReducer: headerReducer,
  calledOnceReducer: calledOnceReducer,
  loginReducer: loginReducer,
  logoutReducer: logoutReducer
});

export default rootReducer;
