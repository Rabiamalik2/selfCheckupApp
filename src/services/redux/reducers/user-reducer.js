import { createSlice } from '@reduxjs/toolkit'
import { setUserAction } from '../actions/user-actions';

const initialState = {
    user: null,
}                                      

export const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        setUser: setUserAction,
    },
})

export const { setUser } = userReducer.actions;

export default userReducer.reducer;


















// const userReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case SET_USER:
//         return {
//           ...state,
//           user: action.payload,
//         };
//       default:
//         return state;
//     }
//   };

//   export default userReducer;
  