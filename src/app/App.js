import React from 'react';
import api from 'common/utils/api';
import Header from './header/Header';
import UserList from './user-list/UserList';
import UserSearch from './user-search/UserSearch';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      userList: [],
      userListLoading: true,
      userSearch: '',
      userSearchError: '',
      userSearchLoading: false,
    };

    this.userSearchOnChange = this.userSearchOnChange.bind(this);
    this.userSearchOnAddClick = this.userSearchOnAddClick.bind(this);
  }

  componentDidMount() {
    Promise.all(['danilo-p', 'brunomacf', 'eduhdm', 'rdsedmundo'].map(username => api.getUser(username)))
      .then((requestsResponse) => {
        this.setState({
          userList: requestsResponse.map(response => response.data),
        });
      })
      .catch((error) => {
        console.error('Could not get the initial users list', error);
      })
      .then(() => {
        this.setState({
          userListLoading: false,
        });
      });
  }

  userSearchOnChange(event) {
    this.setState({
      userSearch: event.currentTarget.value,
    });
  }

  userSearchOnAddClick() {
    if (this.state.userSearchLoading) {
      return;
    }

    if (this.state.userList.find(user => user.login === this.state.userSearch)) {
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
          userList: [
            ...this.state.userList,
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

  render() {
    return (
      <div className="app">
        <Header />
        <div className="App-body">
          <div className="container">
            <UserSearch
              value={this.state.userSearch}
              error={this.state.userSearchError}
              loading={this.state.userSearchLoading}
              onChange={this.userSearchOnChange}
              onAddClick={this.userSearchOnAddClick}
            />
            <UserList
              list={this.state.userList}
              listLoading={this.state.userListLoading}
            />
          </div>
        </div>
      </div>
    );
  }
}

export {
  App as default,
};
