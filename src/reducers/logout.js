import { logoutAction } from '../actions/LogoutAction';
import {createReducerAsync} from 'redux-act-async';

const logoutReducer = createReducerAsync(logoutAction)

export default logoutReducer;
