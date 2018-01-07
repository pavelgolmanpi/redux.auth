import { connect } from 'react-redux'
import { logoutAction } from '../actions/LogoutAction';
import LogoutButton from '../components/LogoutButton';

const mapStateToProps = (state) => {
  const { loading, data, error } = state.logoutReducer;
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
    logoutAction: () => { dispatch(logoutAction()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);
