const baseUrl = 'http://192.168.33.201:5000/api/'
const endPoints = {
userKey: '/user',
contactKey: '/userContact',
loginkey: 'login',
registerkey: 'register',
// contactkey: 'addContact',
goToMyProfileKey:'profile',
imageKey:'addImage',
medDetailsKey: 'medInfo',
docDetailsKey: 'docInfo',
personalInfoKey:'personalInfo',
getContactsKey: 'contacts',
getUserKey: 'user',
sendMessageKey: 'send',
storeVitalSignsKey: 'vitalSigns',
displayVS: "showVitalSigns",
displayQuestionsKey: 'displayQuestions',
storeQuestionaireAnswersKey : 'uploadAnswers',
recMsgKey:'recievedMessage',
getAllMsgsKey: 'getMessages',
deleteContactKey: 'deleteContact',
updateContactKey: 'updateContact',
}

const appleMerchantId = ''
const appleTeamId = ''
const appleKeyId = ''
const googleWebClientId = ''
const googleMapsApiKey = ''
const stripePublishableKey = ''
const facebookAppId = ''

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
}