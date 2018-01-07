import { connect } from 'react-redux'
import { logoutAction } from '../actions/LogoutAction';
import LogoutButton from '../components/LogoutButton';
import fakeAuth from '../components/FakeAuth';


const mapStateToProps = (state) => {
  const { loading, data, error } = state.logoutReducer;

  if(!loading && data && !data.AUTH_TOKEN){
    fakeAuth.signout();
  }

  return {
    loading,
    data,
    error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutAction: () => { dispatch(logoutAction()) && dispatch(fakeAuth.state()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);
