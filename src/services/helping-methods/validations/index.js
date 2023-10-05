const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const passwordRegex = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
export const validateEmail = (email) => {
    if (emailRegex.test(email))
        return true
    else return false
}
export const validatePassword = (password) => {
    if (passwordRegex.test(password))
        return true
    else return false
}