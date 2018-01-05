import axios from 'axios';
import {createActionAsync} from 'redux-act-async';

let menu = [
  {title: "Home", url: "/"},
  {title: "Private", url: "/private"},
  {title: "Some Public Page", url: "/another-public-page"}
];

function menuOk(){
  return new Promise(resolve => setTimeout(resolve, 3000, menu));
}

export const headerAction = createActionAsync('HEADER', menuOk);
