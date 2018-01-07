import { connect } from 'react-redux'
import { loginAction } from '../actions/LoginAction';
import LoginButton from '../components/LoginButton';

const mapStateToProps = (state) => {
  const { loading, data, error } = state.loginReducer
  let isAuthenticated = state.authReducer.AUTH.AUTH_TOKEN != null;

  return {
    loading,
    data,
    error,
    isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: () => { dispatch(loginAction()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);
