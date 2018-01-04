import { headerAction } from '../actions/header';
import {createReducerAsync} from 'redux-act-async';

const headerReducer = createReducerAsync(headerAction)

export default headerReducer;
