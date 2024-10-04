import axios from 'axios';
import { API_URL } from '../utils/const';

export default axios.create({
  baseURL: `${API_URL}`,
  // headers: {
  //   authentication: `${AUTH_LOCAL_STORAGE_TOKEN}`,
  // },
});
