import axios from 'axios';
import {createActionAsync} from 'redux-act-async';

let info = [
  {title: "Title 1", description: "Description 1"},
  {title: "Title 2", description: "Description 2"},
  {title: "Title 3", description: "Description 3"}
];

function infoOk(){
  return new Promise(resolve => setTimeout(resolve, 3000, info));
}

export const onlyForAuthUserInfoAction = createActionAsync('AUTH_ONLY_INFO', infoOk);
