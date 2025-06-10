import { useAppDispatch } from '../../hooks/hooks.ts';
import { setCurrency } from '../../redux/filterSlice.ts';
import type { ChangeEvent } from 'react';

export const FilterForm = () => {
  const dispatch = useAppDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCurrency(e.target.value));
  };

  return <input onChange={handleChange} name="text" type="text" />;
};
