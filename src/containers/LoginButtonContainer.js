import { connect } from 'react-redux'
import { loginAction } from '../actions/LoginAction';
import LoginButton from '../components/LoginButton';
import fakeAuth from '../components/FakeAuth';


const mapStateToProps = (state) => {
  const { loading, data, error } = state.loginReducer

  if(!loading && data && data.AUTH_TOKEN){
    fakeAuth.authenticate(data.AUTH_TOKEN);
  }

  return {
    loading,
    data,
    error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: () => { dispatch(loginAction()) && dispatch(fakeAuth.state()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);
