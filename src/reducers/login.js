import { loginAction } from '../actions/LoginAction';
import {createReducerAsync} from 'redux-act-async';

const loginReducer = createReducerAsync(loginAction)

export default loginReducer;
