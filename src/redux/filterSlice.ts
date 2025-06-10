import { createSlice } from '@reduxjs/toolkit';

const initialState = { currencyName: '' };

const filter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.currencyName = action.payload;
    },
  },
});

export const filterReducer = filter.reducer;

export const { setCurrency } = filter.actions;
