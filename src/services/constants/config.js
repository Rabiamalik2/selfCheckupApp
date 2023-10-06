const baseUrl = 'http://192.168.33.201:5000/api/'
const endPoints = {
userKey: '/user',
personalInfoKey:'/user/personalInfo',
imageKey:'/user/addImage',
loginkey: 'login',
contactKey: '/userContact',
sendMessageKey: 'sendSosMessage',
chatGptMsgKey : "/chatGptMsgs",
medDetailsKey: '/medical/storemedicalData',
docDetailsKey: '/medical/storedoctorData',
storeVitalSignsKey: '/medical/saveVitalData',
displayVS: "/medical/displayVitalData",
displayQuestionsKey: '/questionaire',
storeQuestionaireAnswersKey : '/questionaire/answers',
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