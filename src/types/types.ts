export type currencyState = {
  baseCurrency: string;
  isLoading: boolean;
  isError: string;
  exchangeInfo: null | exchangeInfoResult;
  rates: ratesResult;
};

export type fetchUserInfoCredentials = {
  longitude: number;
  latitude: number;
};

export type rootState = {
  currency: currencyState;
  filter: filterState;
};

export type coordsType = {
  latitude: number;
  longitude: number;
};

export type positionType = {
  coords: coordsType;
};

export type credentialsType = {
  to: string;
  from: string;
  amount: string;
};

export type exchangeInfoResult = {
  to: string;
  from: string;
  amount: number;
  rate: number;
  result: number;
};

export type ratesResult = rates[];

export type rates = [string, number];

export type filterState = {
  currencyName: string;
};
