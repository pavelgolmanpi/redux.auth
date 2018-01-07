const INITIAL_STATE = {
	AUTH: {AUTH_TOKEN: null}
};


export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {
	  case "LOGIN_OK":
	  	return { ...state, AUTH: action.payload.response };
    case "LOGOUT_OK":
	  	return { ...state, AUTH: null };
	  default:
	    return state;
  }
}
