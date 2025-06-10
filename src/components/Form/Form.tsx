import * as React from 'react';
import { useAppDispatch } from '../../hooks/hooks.ts';
import { fetchExchangeCurrency } from '../../redux/operations.ts';

export const Form = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem('text') as HTMLFormElement;
    const [amount, from, , to] = input.value.split(' ');

    dispatch(fetchExchangeCurrency({ amount, from, to }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        pattern="^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$"
        placeholder="15 USD in UAH"
        name={'text'}
        type="text"
      />
      <button>Submit</button>
    </form>
  );
};
