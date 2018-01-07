import { connect } from 'react-redux'
import { onlyForAuthUserInfoAction } from '../actions/OnlyForAuthUserInfo';
import OnlyForAuthUserInfo from '../components/OnlyForAuthUserInfo';

const mapStateToProps = (state) => {
  const { loading, data, error } = state.onlyForAuthUserInfoReducer
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
    onlyForAuthUserInfoAction: () => { dispatch(onlyForAuthUserInfoAction()); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OnlyForAuthUserInfo);
