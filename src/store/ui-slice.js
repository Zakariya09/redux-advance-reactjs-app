import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showOrdertModal: false,
    notification: null
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showCartModal(state) {
      state.showOrdertModal = !state.showOrdertModal;
    },
    showNotification(state, action){
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      }
    }
  },
});

export const uiAction = uiSlice.actions;

export default uiSlice;
