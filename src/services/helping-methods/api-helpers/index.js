export const axiosHandleError = (error, alertText) => {
    console.log('=====API Error Message Start=====')
    if (error?.response) {
        // Request made and server responded
        console.log(error?.response?.data);
        console.log(error?.response?.status);
    } else if (error?.request) {
        // The request was made but no response was received
        console.log(error?.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error?.message);
    }
    console.log('=====API Error Message End =====')
    if (error?.response?.status != 502)
        alert(alertText)
}