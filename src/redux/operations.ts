import { createAsyncThunk } from '@reduxjs/toolkit';
import type {
  credentialsType,
  exchangeInfoResult,
  fetchUserInfoCredentials,
  ratesResult,
  rootState,
} from '../types/types.ts';
import { getUserInfo } from '../service/opencage.ts';
import axios from 'axios';
import { exchangeCurrency, getLatestSymbols } from '../service/exchangeApi.ts';

export const fetchBaseCurrency = createAsyncThunk<
  string,
  fetchUserInfoCredentials,
  { rejectValue: string; state: rootState }
>(
  'currency/fetchBaseCurrency',
  async (coords, { rejectWithValue, getState }) => {
    const { currency } = getState();
    if (currency.baseCurrency) {
      return currency.baseCurrency;
    }
    try {
      const data = await getUserInfo(coords);
      return data.results[0].annotations.currency.iso_code;
    } catch (error) {
      let errorMessage = 'unknown error';
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data.message || error.message;
      }
      return rejectWithValue(errorMessage);
    }
  },
);

export const fetchExchangeCurrency = createAsyncThunk<
  exchangeInfoResult,
  credentialsType,
  { rejectValue: string }
>('currency/fetchExchangeCurrency', async (currency, { rejectWithValue }) => {
  try {
    const result = await exchangeCurrency(currency);
    console.log(result);
    return result;
  } catch (error) {
    let errorMessage = 'unknown error';
    if (axios.isAxiosError(error)) {
      errorMessage = error.response?.data.message || error.message;
    }
    return rejectWithValue(errorMessage);
  }
});

export const fetchLatestRates = createAsyncThunk<
  ratesResult,
  string,
  { rejectValue: string }
>('currency/fetchLatestRates', async (baseCurrency, { rejectWithValue }) => {
  try {
    const result = await getLatestSymbols(baseCurrency);
    return result;
  } catch (error) {
    let errorMessage = 'unknown error';
    if (axios.isAxiosError(error)) {
      errorMessage = error.response?.data.message || error.message;
    }
    return rejectWithValue(errorMessage);
  }
});
