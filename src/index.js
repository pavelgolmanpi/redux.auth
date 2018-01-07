import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, browserHistory, Route, IndexRoute, Switch } from 'react-router-dom';
import reducer from './reducers';
import PrivateRoute from './routes/private'
import IndexPage from './pages/IndexPage';
import PublicPage from './pages/AnotherPublicPage';
import ProtectedPage from './pages/ProtectedPage'
import LoginPage from './pages/LoginPage'

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/public" component={PublicPage} />
        <Route path="/login" component={LoginPage}/>
        <PrivateRoute exact path='/protected' component={ProtectedPage} store={store} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('body'));
