import {createSlice} from '@reduxjs/toolkit';

type InitialState = {
  info?: object;
};

const initialState: InitialState = {};

/**
 * 1. Create a new slice using the createSlice method provided by @reduxjs/toolkit
 * 2. Give the name, initial state and the reducers options to the createSlice method
 * 3. reducers: {
 *      actionName: (state, action) => {} // full action name will be name of slice + actionName => user/setUserInfo
 *    }
 * 4. Export actions actionName from slice.actions
 * 5. Export the reducer as default slice.reducer
 */
const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUserInfo: (state: InitialState, action) => {
      console.log(action.payload);

      state.info = action.payload;
    },
  },
});

export const {setUserInfo} = userSlice.actions;

export default userSlice.reducer;
