import { combineReducers } from 'redux';
import headerReducer from './header';
import calledOnceReducer from './CalledOnce';
import authReducer from './auth';
import loginReducer from './login';
import logoutReducer from './logout';
import onlyForAuthUserInfoReducer from './OnlyForAuthUserInfo'
//import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  headerReducer: headerReducer,
  calledOnceReducer: calledOnceReducer,
  authReducer: authReducer,
  loginReducer: loginReducer,
  logoutReducer: logoutReducer,
  onlyForAuthUserInfoReducer: onlyForAuthUserInfoReducer
});

export default rootReducer;
