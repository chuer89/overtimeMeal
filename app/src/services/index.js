// import request from './request';
import axios from 'axios';
import qs from 'qs';

let host = '//192.168.88.157:8081';
let ajax = (api, param = {}) => {
  return axios.post(host + api, qs.stringify(param));
}

let http = {
  meal(param) {
    return ajax('/meal', param);
  },

  department() {
    return ajax('/department');
  },

  clear() {
    return ajax('/clear');
  },
}

export default http;