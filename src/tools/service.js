import axios from 'axios';

const api = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.VUE_APP_BASE_URL
});

function post(path, query) {
  return api.post(path, query);
}

export { post };
