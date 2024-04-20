import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  namee: [],
  coin: []
};

const notesData = createSlice({
  name: "notesData",
  initialState: initialState,
  reducers: {
    add1: (state, action) => {
      state.namee.push(action.payload.note);
    },
    deleteNote: (state, action) => {
      state.namee = state.namee.filter(note => note.key !== action.payload.key);
    },

    addCoin: (state, action) => {
      state.coin.push(action.payload.coin)
    }
  }
});

export const { add1, deleteNote, addCoin } = notesData.actions;
export default notesData.reducer;
