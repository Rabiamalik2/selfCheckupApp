import axiosInstance from '../http';
import {endPoints} from '../../constants/config';

const fetchUserData = async userID => {
  try {
    const response = await axiosInstance.get(endPoints?.userKey, {
      params: {userID: userID},
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const deleteUser = async userID => {
  try {
    console.log(userID);
    const response = await axiosInstance.delete(endPoints?.userKey, {
      params: {userID: userID},
    });
    return response;
  } catch (error) {
    console.error('Error Deleting User:', error);
  }
};

const addImage = async (email, imagePath) => {
  const response = await axiosInstance.post(endPoints.imageKey, {
    email: email,
    imagePath: imagePath,
  });
  return response;
};

const getPersonalInfo = async (userID, dob, gender, homeAddress) => {
  const response = await axiosInstance.put(endPoints.personalInfoKey, {
    userID: userID,
    dob: dob,
    gender: gender,
    homeAddress: homeAddress,
  });
  return response;
};

const sendResetPassEmail = async userEmail => {
  const response = await axiosInstance.post(endPoints.resetPassKey, {
    userEmail: userEmail,
  });
  return response;
};
const confirmPasscode = async code => {
  const response = await axiosInstance.post(endPoints.codeKey, {
    code: code,
  });
  return response;
};
const updatePasswordApiCall = async (email, password) => {
  const response = await axiosInstance.put(endPoints.updatePasswordKey, {
    email: email,
    password: password,
  });
  return response;
};
export {
  addImage,
  getPersonalInfo,
  fetchUserData,
  deleteUser,
  sendResetPassEmail,
  confirmPasscode,
  updatePasswordApiCall,
};
