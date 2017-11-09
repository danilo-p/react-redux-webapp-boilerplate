/**
 * TODO
 * - [] Search and add references to the used styles guidelines
 * - [] Study Jest
 * - [] Study Enzyme and React Elements test
 * - [] Add React Router
 * - [] Add Redux
 * - [] Add RxJS
 * - [] Add GraphQL
 * - [] Add support to coveralls
 * - [x] Search and add references to the used React guidelines
 * - [x] Add tests with Jest
 * - [x] Add support to raw files
 * - [x] Check if the images are being placed at dist/assets
 * - [x] Add support for PugJs on the index.html template
 * - [x] Configure build for production
 * - [x] Add support to project configuration
 */

import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

import React from 'react';
import ReactDOM from 'react-dom';
import usersReducer from  'common/redux/users/users';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';

let store = createStore(usersReducer);

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>

  ), document.getElementById('root'),
);
