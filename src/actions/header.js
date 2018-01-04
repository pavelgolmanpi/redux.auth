import axios from 'axios';
import {createActionAsync} from 'redux-act-async';

let menu = [
  {title: "Home", url: "/"},
  {title: "Private", url: "/private"},
  {title: "Mixed", url: "/mixed"}
];

function menuOk(){
  return new Promise(resolve => setTimeout(resolve, 2000, menu));
}

export const headerAction = createActionAsync('HEADER', menuOk);
