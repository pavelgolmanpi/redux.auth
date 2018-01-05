import { connect } from 'react-redux'
import { calledOnceAction } from '../actions/CalledOnce';
import CalledOnceComponent from '../components/CalledOnceComponent';


const mapStateToProps = (state) => {
  const { loading, data, error } = state.calledOnceReducer
  return {
    loading,
    data,
    error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    calledOnceAction: () => { dispatch(calledOnceAction()); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalledOnceComponent);
