import Select, { type SingleValue } from 'react-select';
import { useAppDispatch } from '../../hooks/hooks.ts';
import { setBaseCurrency } from '../../redux/currencyChange.ts';
import options from './symbols.json';
type Option = {
  label: string;
};

export const SelectRates = ({ baseCurrency }: { baseCurrency: string }) => {
  const dispatch = useAppDispatch();
  const handleChange = (newValue: SingleValue<Option> | null) => {
    if (newValue) {
      console.log(newValue.label);
      dispatch(setBaseCurrency(newValue.label));
    }
  };
  return (
    <Select
      defaultValue={{ label: baseCurrency, value: baseCurrency }}
      onChange={handleChange}
      options={options}
    />
  );
};
