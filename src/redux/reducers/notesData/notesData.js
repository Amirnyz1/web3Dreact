import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  namee: [],
  coin: [],
  ordersData: []
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
    },
    addOrder: (state, action) =>{
      state.ordersData = action.payload.order
    }
  }
});

export const { add1, deleteNote, addCoin, addOrder } = notesData.actions;
export default notesData.reducer;
