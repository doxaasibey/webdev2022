import {createSlice} from "@reduxjs/toolkit";
import bio from '../Profile/bio.json';

const profileSlice = createSlice({
    name: "profile",
    initialState: bio,
    reducers: {
        updateProfile(state, action) {
            state = null;
            return state = action.payload
        }
    }
});

export const {updateProfile} = profileSlice.actions;

export default profileSlice.reducer;