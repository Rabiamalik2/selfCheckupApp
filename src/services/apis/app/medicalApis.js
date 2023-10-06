import axiosInstance from '../http';
import {endPoints} from '../../constants/config';
const getMedicoreInfo = async (
  userID,
  mediQues,
  mediID,
  insuranceName,
  insuranceId,
  user,
) => {
  // console.log('medDetails: ', userID);
  const response = await axiosInstance.post(endPoints?.medDetailsKey, {
    userID: userID,
    mediQues: mediQues,
    mediID: mediID,
    insuranceName: insuranceName,
    insuranceID: insuranceId,
    user: userID,
  });

  return response;
};

const getDoctorInfo = async (
  userID,
  docName,
  phoneNumber,
  insuranceName,
  user,
) => {
  // console.log('docInfo: ', userID);
  const response = await axiosInstance.post(endPoints?.docDetailsKey, {
    userID: userID,
    docName: docName,
    phoneNumber: phoneNumber,
    insuranceName: insuranceName,
    user: userID,
  });
  return response;
};

const getVitalSigns = async (
  userID,
  bloodPressure,
  bloodSugarLevel,
  pulse,
  bodyTemprature,
  user,
) => {
  const response = await axiosInstance.post(endPoints?.storeVitalSignsKey, {
    userID: userID,
    bloodPressure: bloodPressure,
    bloodSugarLevel: bloodSugarLevel,
    pulse: pulse,
    bodyTemprature: bodyTemprature,
    user: userID,
  });
  return response;
};

const displayVitalSigns = async userID => {
  try {
    const response = await axiosInstance.get(endPoints?.displayVS, {
      params: {userID: userID},
    });
    const data = response.data;
    // console.log('data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export {getDoctorInfo, getMedicoreInfo, getVitalSigns, displayVitalSigns};
