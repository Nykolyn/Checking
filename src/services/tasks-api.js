import axios from 'axios';

axios.defaults.baseURL = '';

const getTasks = async token => {
  try {
    const data = axios.get(`${token}`);
    return data;
  } catch (e) {
    return e;
  }
};

export default getTasks;
