// const baseUrl = 'http://192.168.33.243:5000/api/'
const baseUrl = 'https://ill-plum-goose-tux.cyclic.app/api/';
const endPoints = {
  userKey: 'user',
  personalInfoKey: 'user/personalInfo',
  imageKey: 'user/addImage',
  loginkey: 'login',
  googleLoginKey: 'googleLogin',
  fbLoginKey: 'fbLogin',
  resetPassKey: 'resetPassword',
  codeKey: 'codeConfirmation',
  updatePasswordKey: 'updatePassword',
  contactKey: 'userContact',
  sendMessageKey: 'sendSosMessage',
  chatGptMsgKey: 'chatGptMsgs',
  medDetailsKey: 'medical/storemedicoreData',
  docDetailsKey: 'medical/storedoctorData',
  storeVitalSignsKey: 'medical/vitalData',
  displayVS: 'medical/vitalData',
  displayQuestionsKey: 'questionaire',
  storeQuestionaireAnswersKey: 'questionaire/answers',
};

const appleMerchantId = '';
const appleTeamId = '';
const appleKeyId = '';
const googleWebClientId = '';
const googleMapsApiKey = '';
const stripePublishableKey = '';
const facebookAppId = '';

export {
  baseUrl,
  endPoints,
  appleMerchantId,
  appleTeamId,
  appleKeyId,
  googleWebClientId,
  googleMapsApiKey,
  stripePublishableKey,
  facebookAppId,
};
