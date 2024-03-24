import { createSlice } from "@reduxjs/toolkit";

const init = {
    isLoggedIn: false,
    userName: "",
    email: "",
    profilePhoto: "",
    bio: "",
    option: ""
}

const dataReducer = createSlice({
    name: 'dataReducer',
    initialState: init,
    reducers: {
        add: (state, action) => {
            state.isLoggedIn = action.payload.isLoggedIn
            state.userName = action.payload.userName
            state.email = action.payload.email

        },
        addProfile: (state, action) => {
            state.profilePhoto = action.payload.profilePhoto

        },
        addBio: (state, action) => {
            state.bio = action.payload.bio
        },
        clickProfile: (state, action) => {
            state.option = action.payload.profile
        }
    }
})

export const { add, addProfile, addBio, clickProfile } = dataReducer.actions
export default dataReducer.reducer