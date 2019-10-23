import axios from 'axios';

axios.defaults.baseURL = 'https://cheking.goit.co.ua/api/v1';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const getTasks = async token => {
  try {
    const data = axios.get(`${token}`);
    return data;
  } catch (e) {
    return e;
  }
};

export const postTask = (task, token, id) => {
  axios.defaults.headers.common.Authorization = token;
  const route = id ? `/tasks/${id}` : '/tasks';
  return axios.post(route, task);
};

export const deleteTask = (task, token, id) => {
  axios.defaults.headers.common.Authorization = token;
  return axios.delete(`/tasks/${id}`, task);
};
