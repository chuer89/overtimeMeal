import request from './request';
import axios from 'axios';

let host = '//localhost:8081';
let ajax = (api, param = {}) => {
  return axios.get(host + api, param);
}

let http = {
  department() {
    return ajax('/department');
  }
}

export default http;