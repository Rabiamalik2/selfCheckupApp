import axiosInstance from '../http';
import {endPoints} from '../../constants/config';

const fetchUserData = async userID => {
  try {
    const response = await axiosInstance.get(endPoints?.userKey, {
      params: {userID: userID},
    });
    const data = response.data;
    //console.log('data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const addImage = async (email, imagePath) => {
  const response = await axiosInstance.post(endPoints.imageKey, {
    email: email,
    imagePath: imagePath,
  });
  // console.log(email);
  // console.log('add Image', response);
  return response;
};

const getPersonalInfo = async (userID, dob, gender, homeAddress) => {
  const response = await axiosInstance.put(endPoints.personalInfoKey, {
    userID: userID,
    dob: dob,
    gender: gender,
    homeAddress: homeAddress,
  });
  //console.log('perosnal info Api:', userID);
  //console.log('personal info', response);
  return response;
};

export {addImage, getPersonalInfo, fetchUserData};
