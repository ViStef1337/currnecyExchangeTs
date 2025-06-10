import axios from 'axios';
import type { coordsType } from '../types/types.ts';

export const getUserInfo = async ({ latitude, longitude }: coordsType) => {
  const apiKey = 'd4683b09d0c94ec0aebf0b2e043decbf';
  const { data } = await axios.get(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C${longitude}&key=${apiKey}`,
  );
  return data;
};
