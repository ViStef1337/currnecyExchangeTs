import { createSlice } from '@reduxjs/toolkit';
import type { currencyState } from '../types/types.ts';
import {
  fetchBaseCurrency,
  fetchExchangeCurrency,
  fetchLatestRates,
} from './operations.ts';

const initialState: currencyState = {
  baseCurrency: '',
  isLoading: false,
  isError: '',
  exchangeInfo: null,
  rates: [],
};

const currencyChange = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchBaseCurrency.fulfilled, (state, action) => {
        state.baseCurrency = action.payload;
      })
      .addCase(fetchExchangeCurrency.fulfilled, (state, action) => {
        state.exchangeInfo = action.payload;
        state.isError = '';
        state.isLoading = false;
      })
      .addCase(fetchLatestRates.fulfilled, (state, action) => {
        state.rates = action.payload;
        state.isError = '';
        state.isLoading = false;
      }),
});

export const currencyReducer = currencyChange.reducer;

export const { setBaseCurrency } = currencyChange.actions;
