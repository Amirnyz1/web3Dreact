import { createSlice } from "@reduxjs/toolkit";

const init = {
    isLoggedIn: false,
    userName: "",
    email: "",
    profilePhoto: "",
    bio: "",
    option: "",
    coinsDatas : []
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
        coinsD : (state, action) => {
            state.coinsDatas = action.payload.coinsDatas
        }
    }
})

export const { add, addProfile, addBio, coinsD } = dataReducer.actions
export default dataReducer.reducer