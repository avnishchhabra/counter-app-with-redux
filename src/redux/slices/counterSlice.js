import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    number: 0,
  },
  reducers: {
    increment: (state, action) => {
      console.log("action", action);
      state.number = state.number + 1;
    },
    decrement: (state, action) => {
      state.number = state.number - 1;
    },
    incrementByValue: (state, action) => {
      console.log("action", action);
      state.number = state.number + action.payload;
    },
    decrementByValue: (state, action) => {
      console.log("action", action);
      state.number = state.number - action.payload;
    },
  },
});

export const { increment, decrement, incrementByValue, decrementByValue } =
  counterSlice.actions;

const counterReducer = counterSlice.reducer;
export default counterReducer;
