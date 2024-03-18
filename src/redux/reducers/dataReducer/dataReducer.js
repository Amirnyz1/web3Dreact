import { createSlice } from "@reduxjs/toolkit";

const init = {
    isLoggedIn: false,
    userName: "",
    email: ""
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
    }
})

export const { add } = dataReducer.actions
export default dataReducer.reducer