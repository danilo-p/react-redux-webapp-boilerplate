import React from 'react';
import api from 'common/utils/api';
import githubLogo from 'common/assets/github.png';
import styles from './App.styl';
import UserList from './user-list/UserList';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      usersList: [],
      userSearch: '',
      userSearchError: '',
      usersListLoading: true,
      userSearchLoading: false,
    };

    this.onUserSearchChange = this.onUserSearchChange.bind(this);
    this.onUserAddClick = this.onUserAddClick.bind(this);
    this.renderUsersSearch = this.renderUsersSearch.bind(this);
  }

  componentDidMount() {
    Promise.all(['danilo-p', 'brunomacf', 'eduhdm', 'rdsedmundo'].map(username => api.getUser(username)))
      .then((requestsResponse) => {
        this.setState({
          usersList: requestsResponse.map(response => response.data),
        });
      })
      .catch((error) => {
        console.error('Could not get the initial users list', error);
      })
      .then(() => {
        this.setState({
          usersListLoading: false,
        });
      });
  }

  onUserSearchChange(event) {
    this.setState({
      userSearch: event.currentTarget.value,
    });
  }

  onUserAddClick() {
    if (this.state.userSearchLoading) {
      return;
    }

    if (this.state.usersList.find(user => user.login === this.state.userSearch)) {
      this.setState({
        userSearchError: `The user ${this.state.userSearch} is already loaded on the list`,
      });
      return;
    }

    this.setState({
      userSearchLoading: true,
    });

    api.getUser(this.state.userSearch)
      .then((response) => {
        this.setState({
          usersList: [
            ...this.state.usersList,
            response.data,
          ],
          userSearchError: '',
        });
      })
      .catch(() => {
        this.setState({
          userSearchError: `An error ocurred while trying to add the user ${this.state.userSearch}`,
        });
      })
      .then(() => {
        this.setState({
          userSearchLoading: false,
        });
      });
  }

  renderUsersSearch() {
    return (
      <div className="user-search mt-3">
        <div className="row">
          <div className="col-md-4">
            <div className="input-group">
              <input type="text" className="form-control" onChange={this.onUserSearchChange} />
              <span className="input-group-btn">
                <button
                  onClick={this.onUserAddClick}
                  className="btn btn-primary"
                  style={{ cursor: 'pointer' }}
                  disabled={this.state.userSearchLoading}
                >
                  {
                    this.state.userSearchLoading
                      ? 'Loading...'
                      : 'Add'
                  }
                </button>
              </span>
            </div>
            <div className="text-danger" style={{ fontSize: '0.8em' }}>{this.state.userSearchError}</div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="app">
        <div className={styles.app__header}>
          <img src={githubLogo} className={styles.app__logo} alt="logo" />
        </div>
        <div className="App-body">
          <div className="container">
            {this.renderUsersSearch()}
            <UserList list={this.state.usersList} listLoading={this.state.usersListLoading} />
          </div>
        </div>
      </div>
    );
  }
}

export {
  App as default,
};
