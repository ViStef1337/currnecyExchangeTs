import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks.ts';
import { fetchLatestRates } from '../redux/operations.ts';
import { selectBaseCurrency } from '../redux/selectors.ts';
import { RatesList } from '../components/RatesList/RatesList.tsx';
import { FilterForm } from '../components/FilterForm/FilterForm.tsx';

export const Rates = () => {
  const dispatch = useAppDispatch();
  const baseCurrency = useAppSelector(selectBaseCurrency);
  useEffect(() => {
    dispatch(fetchLatestRates(baseCurrency));
  }, [baseCurrency, dispatch]);
  return (
    <>
      <FilterForm />
      <RatesList />
    </>
  );
};
