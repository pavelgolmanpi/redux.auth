import { calledOnceAction } from '../actions/CalledOnce';
import {createReducerAsync} from 'redux-act-async';

const calledOnceReducer = createReducerAsync(calledOnceAction)

export default calledOnceReducer;
