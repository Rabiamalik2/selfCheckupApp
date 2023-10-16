import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {baseUrl, endPoints} from '../constants/config';
import * as Keychain from 'react-native-keychain';
import Constants from '../constants/constants';
let apiCalls = 0;
const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  async config => {
    const credentials = await Keychain.getGenericPassword();
    console.log("axios: " ,config.baseURL, config.url)
    if (credentials) {
      const token = credentials.password;
      // console.log("token: " ,token)
      config.headers['Authorization'] = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  res => {
    return res;
  },
  async err => {
    const originalConfig = err.config;

    if (
      originalConfig.url !== endPoints.login &&
      err.response &&
      apiCalls < 3
    ) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          apiCalls += 1;
          // const rs = await axiosInstance.post(endPoints.refreshToken);
          // const { accessToken } = rs.data;
          // await AsyncStorage.setItem(Constant s.token, accessToken)
          return axiosInstance(originalConfig);
        } catch (_error) {
          console.log('=====API Error Message Start=====');
          if (_error?.response) {
            // Request made and server responded
            console.log(_error?.response?.data);
            console.log(_error?.response?.status);
          } else if (_error?.request) {
            // The request was made but no response was received
            console.log(_error?.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', _error?.message);
          }
          console.log('=====API Error Message End =====');
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  },
);

export default axiosInstance;
