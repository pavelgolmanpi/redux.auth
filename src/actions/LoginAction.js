import axios from 'axios';
import { createActionAsync } from 'redux-act-async';

function loginOk(){
  return new Promise(resolve => {
    setTimeout(resolve, 3000, { AUTH_TOKEN: "AUTH TOKEN VALUE" })
  });
}

export const loginAction = createActionAsync('LOGIN', loginOk);
