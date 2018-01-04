import { combineReducers } from 'redux';
import headerReducer from './header';
//import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  headerReducer: headerReducer
});

export default rootReducer;
