import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, browserHistory, Route, IndexRoute, Switch } from 'react-router-dom';
import reducer from './reducers';
import IndexPage from './pages/IndexPage';
import AnotherPublicPage from './pages/AnotherPublicPage';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/another-public-page" component={AnotherPublicPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('body'));
