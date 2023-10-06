import axiosInstance from '../http';
import {endPoints} from '../../constants/config.js';
const createMsgApi = async (userID, messages) => {
  try {
    const response = await axiosInstance.post(endPoints?.chatGptMsgKey, {
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
    const response = await axiosInstance.get(endPoints?.chatGptMsgKey, {
      params: {userID: userID},
    });
    // console.log(response.data)
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
export {createMsgApi, getGptMSgs};
