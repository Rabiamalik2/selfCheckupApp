import axiosInstance from '../http';
import {endPoints} from '../../constants/config';

const registerMe = async (firstname, lastname, phone, email, password) => {
  const response = await axiosInstance.post(endPoints?.userKey, {
    firstname: firstname,
    lastname: lastname,
    phone: phone,
    email: email,
    password: password,
  });
  return response;
};

const loginToMyProfile = async (email, password) => {
  console.log(email, password);
  const response = await axiosInstance.post(endPoints?.loginkey, {
    email: email,
    password: password,
  });
  console.log(response.data);
  return response;
};

const loginwithGoogle = async userInfo => {
  console.log(userInfo);
  const response = await axiosInstance.post(endPoints?.googleLoginKey, {
    userInfo: userInfo,
  });
  console.log('google api:', response.data);
  return response;
};

const loginwithFb = async accessToken => {
  console.log('apiCall:', accessToken);
  const response = await axiosInstance.post(endPoints?.fbLoginKey, {
    accessToken: accessToken,
  });
  console.log('fb api call:', response.data);
  return response;
};

export {loginToMyProfile, registerMe, loginwithGoogle, loginwithFb};
