import { createSlice } from "@reduxjs/toolkit";

const ui_slice = createSlice({
  name: "ui",
  initialState: { notification: null },
  reducers: {
    setNotification: (state, action) => {
      state.notification = {
        message: action.payload.message,
        type: action.payload.type,
        open: action.payload.open,
      };
    },
  },
});

export const uiActions = ui_slice.actions;
export default ui_slice;
