import axios from 'axios';
import {createActionAsync} from 'redux-act-async';

let menu = [
  {title: "Home", url: "/"},
  {title: "Private", url: "/private"},
  {title: "Mixed", url: "/mixed"}
];

function menuOk(){
  return Promise.resolve(menu);
  /*
  return Promise(() => {
    let wait = setTimeout(() => {
      clearTimout(wait);
      alert('YO');
      resolve(menu);
    }, 2000)
  });
  */
}

export const headerAction = createActionAsync('HEADER', menuOk);
