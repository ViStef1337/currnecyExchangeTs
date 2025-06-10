import type { rootState } from '../types/types.ts';

export const selectBaseCurrency = (state: rootState) =>
  state.currency.baseCurrency;

export const selectExchangeInfo = (state: rootState) =>
  state.currency.exchangeInfo;

export const selectRates = (state: rootState) => state.currency.rates;

export const selectFilter = (state: rootState) => state.filter.currencyName;
