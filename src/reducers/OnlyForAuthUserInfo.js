import { onlyForAuthUserInfoAction } from '../actions/OnlyForAuthUserInfo';
import {createReducerAsync} from 'redux-act-async';

const onlyForAuthUserInfoReducer = createReducerAsync(onlyForAuthUserInfoAction)

export default onlyForAuthUserInfoReducer;
