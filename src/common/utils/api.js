import axios from 'axios';

const apiUrl = 'https://api.github.com';

export default {
  getUser(userName) {
    return axios.get(`${apiUrl}/users/${userName}`);
  },
};
