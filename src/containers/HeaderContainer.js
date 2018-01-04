import { connect } from 'react-redux'
import { headerAction } from '../actions/header';
import HeaderMenu from '../components/HeaderMenu';


const mapStateToProps = (state) => {
  const { loading, data, error } = state.headerReducer
  return {
    loading,
    data,
    error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    headerAction: () => { dispatch(headerAction()); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);
