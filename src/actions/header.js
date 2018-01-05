import axios from 'axios';
import {createActionAsync} from 'redux-act-async';

let menu = [
  {title: "Home", url: "/"},
  {title: "Protected", url: "/protected"},
  {title: "Public", url: "/public"}
];

function menuOk(){
  return new Promise(resolve => setTimeout(resolve, 3000, menu));
}

export const headerAction = createActionAsync('HEADER', menuOk);
