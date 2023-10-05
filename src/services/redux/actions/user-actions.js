const setUserAction = (state , action) => {
    // console.log("user state", state)
    // console.log("user action:" ,action)
    state.user = action.payload;
    // console.log("User Data from the Redux Action",state.user)
}
  
export { setUserAction };
