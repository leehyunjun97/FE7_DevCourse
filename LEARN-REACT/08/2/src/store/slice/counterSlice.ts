import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counterSlice2',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action: PayloadAction<{ amount: number }>) => {
      state.value += action.payload.amount;
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
