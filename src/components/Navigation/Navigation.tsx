import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks.ts';
import { selectBaseCurrency } from '../../redux/selectors.ts';
import { SelectRates } from '../SelectRates/SelectRates.tsx';

export const Navigation = () => {
  const baseCurrency = useAppSelector(selectBaseCurrency);
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="rates">Rates</Link>
      </li>
      {baseCurrency && (
        <div>
          your base currency : <SelectRates baseCurrency={baseCurrency} />
        </div>
      )}
    </ul>
  );
};
