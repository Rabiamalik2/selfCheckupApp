import axiosInstance from '../http';
import {endPoints} from '../../constants/config';
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

const updateContact = async (
  contactID,
  firstname,
  lastname,
  phone,
  relation,
) => {
  const response = await axiosInstance.put(endPoints?.contactKey, {
    contactID: contactID,
    firstname: firstname,
    lastname: lastname,
    phone: phone,
    relation: relation,
  });

  return response;
};

const deleteContact = async (userID, contactID) => {
  try {
    console.log(contactID, userID);
    const response = await axiosInstance.delete(endPoints?.contactKey, {
      params: {contactID: contactID, userID: userID},
    });
    return response;
  } catch (error) {
    console.error('Error Deleting Emergency Contact:', error);
  }
};

const sendSosMessageCall = async phone => {
  const response = await axiosInstance.post(endPoints?.sendMessageKey, {
    phone: phone,
  });
  return response;
};

export {
  addContacts,
  fetchEmergencyContacts,
  sendSosMessageCall,
  deleteContact,
  updateContact,
};
