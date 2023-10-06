import axiosInstance from '../http'
import { endPoints } from '../../constants/config'
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
  
export {
    getQuestionaire,
    storeQuestionaireAnswers,
}