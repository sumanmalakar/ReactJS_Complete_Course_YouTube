import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  counter: 10,
  name: "suman",
  product: [
    { id: 1, title: "iphone" },
    { id: 2, title: "onePlus" },
  ],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.counter += 1;
    },
    decrement: (state) => {
      state.value -= 1;
      state.counter -= 1;
    },

    incrementBy20: (state) => {
      state.value += 20;
      state.counter += 20;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementBy20 } = counterSlice.actions;

export default counterSlice.reducer;
