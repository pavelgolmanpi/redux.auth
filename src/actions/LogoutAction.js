import axios from 'axios';
import { createActionAsync } from 'redux-act-async';

function logoutOk(){
  return new Promise(resolve => {
    setTimeout(resolve, 3000, { AUTH_TOKEN: null })
  });
}

export const logoutAction = createActionAsync('LOGOUT', logoutOk);
