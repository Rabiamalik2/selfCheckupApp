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
  const response = await axiosInstance.post(endPoints?.loginkey, {
    email: email,
    password: password,
  });
  return response;
};

export {loginToMyProfile, registerMe};
