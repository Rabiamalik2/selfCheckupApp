import axiosInstance from '../http';
import {endPoints} from '../../constants/config';
import {Image} from 'react-native';
import {getGenericPassword} from 'react-native-keychain';
import {responsiveScreenFontSize} from 'react-native-responsive-dimensions';

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

const getMyProfile = async token => {
  try {
    if (token) {
      //console.log("before errr")
      const response = await axiosInstance.get(endPoints.goToMyProfileKey, {
        //method: "",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      //console.log("after err")
      return response.data;
    } else {
      console.log('No token found in the keychain.');
      return null;
    }
  } catch (error) {
    //console.log("here it is")
    console.error('Error fetching profile:', error);
  }
};

const loginToMyProfile = async (email, password) => {
  const response = await axiosInstance.post(endPoints?.loginkey, {
    email: email,
    password: password,
  });
  return response;
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
  const response = await axiosInstance.post(endPoints.personalInfoKey, {
    userID: userID,
    dob: dob,
    gender: gender,
    homeAddress: homeAddress,
  });
  //console.log('perosnal info Api:', userID);
  //console.log('personal info', response);
  return response;
};
const addContacts = async (
  userID,
  firstname,
  lastname,
  phone,
  relation,
  user,
) => {
  // console.log(userID);
  const response = await axiosInstance.post(endPoints?.contactKey, {
    userID: userID,
    firstname: firstname,
    lastname: lastname,
    phone: phone,
    relation: relation,
    user: userID,
  });

  return response;
};

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
    headers: {
      Authorization: `Bearer ${token}`,
    },
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

const fetchEmergencyContacts = async userID => {
  try {
    const response = await axiosInstance.get(endPoints?.contactKey, {
      params: {userID: userID},
    });
    const data = response.data;
    //console.log('data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
const sendMessageCall = async phone => {
  const response = await axiosInstance.post(endPoints?.sendMessageKey, {
    phone: phone,
  });
  return response;
};

const getQuestionaire = async userID => {
  try {
    const response = await axiosInstance.get(endPoints?.displayQuestionsKey, {
      params: {userID: userID},
    });
    const data = response.data;
    //  console.log('data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const storeQuestionaireAnswers = async (
  userID,
  questionaireID,
  answers,
  user,
) => {
  // console.log("store id: ", userID);
  const response = await axiosInstance.post(
    endPoints?.storeQuestionaireAnswersKey,
    {
      userID: userID,
      user: userID,
      questionaireID: questionaireID,
      answers: answers,
    },
  );
  // console.log("res api call: ", response)
  return response;
};

const sendMsg = async (userID, messages) => {
  try {
    const response = await axiosInstance.post(endPoints?.recMsgKey, {
      userID: userID,
      messages: messages,
    });
    // console.log('response:', response.data);
    return response;
  } catch (error) {
    console.error('Error sending messages:', error);
  }
};
const getGptMSgs = async userID => {
  try {
    const response = await axiosInstance.get(endPoints?.getAllMsgsKey, {
      params: {userID: userID},
    });
    // console.log(response.data)
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
const deleteContact = async (userID, contactID) => {
  try {
    console.log(contactID , userID);
    const response = await axiosInstance.delete(endPoints?.contactKey, {
      params: {contactID: contactID, userID: userID,},
    });
    return response;
  } catch (error) {
    console.error('Error Deleting Emergency Contact:', error);
  }
};

const updateContact = async (
  contactID,
  firstname,
  lastname,
  phone,
  relation,
) => {
  const response = await axiosInstance.post(endPoints?.contactKey, {
    contactID: contactID,
    firstname: firstname,
    lastname: lastname,
    phone: phone,
    relation: relation,
  });

  return response;
};

export {
  getMyProfile,
  loginToMyProfile,
  registerMe,
  addContacts,
  addImage,
  getPersonalInfo,
  getDoctorInfo,
  getMedicoreInfo,
  fetchEmergencyContacts,
  sendMessageCall,
  fetchUserData,
  getVitalSigns,
  displayVitalSigns,
  getQuestionaire,
  storeQuestionaireAnswers,
  sendMsg,
  getGptMSgs,
  deleteContact,
  updateContact,
};
