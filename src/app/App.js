import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from 'common/component/header/Header';
import UserListPage from './public/users-list-page/UsersListPage';
import UserPage from './public/user-page/UserPage';


const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path="/" component={UserListPage} />
      <Route path="/user/:string" component={UserPage} />
    </Switch>
  </div>
);

export {
  App as default,
};
