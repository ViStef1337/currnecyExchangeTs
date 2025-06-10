import axios from 'axios';
import type { credentialsType, ratesResult } from '../types/types.ts';

const instance = axios.create({
  baseURL: 'https://api.apilayer.com/exchangerates_data',
  headers: {
    apikey: 'GWhl6k6rgG7MwDOjQRnTcOThHkN1j9aG',
  },
});
export const exchangeCurrency = async (credentials: credentialsType) => {
  const {
    data: { info, query, result },
  } = await instance.get('/convert', { params: credentials });
  return { ...query, rate: info.rate, result };
};

export const getLatestSymbols = async (
  baseCurrency: string,
): Promise<ratesResult> => {
  const { data } = await instance.get(`/latest?symbols&base=${baseCurrency}`);
  return Object.entries(data.rates);
};
