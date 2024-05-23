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
      state.ordersData.push(action.payload.order)
    },
    deleteOrder : (state,action) => {
      state.ordersData = state.ordersData.filter(order => order.key !== action.payload.key)
    }
  }
});

export const { add1, deleteNote, addCoin, addOrder, deleteOrder } = notesData.actions;
export default notesData.reducer;
