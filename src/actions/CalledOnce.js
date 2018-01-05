import axios from 'axios';
import {createActionAsync} from 'redux-act-async';

let info = [
  {title: "Title of called once info", description: "Description of called once info"},
];

var executed = false;

function infoOk(){
  return new Promise(resolve => {
    executed ? resolve(info) : (setTimeout(resolve, 5000, info) && (executed = true))
  });
}

export const calledOnceAction = createActionAsync('CALLED_ONCE', infoOk);
