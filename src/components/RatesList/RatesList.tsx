import { useAppSelector } from '../../hooks/hooks.ts';
import { selectFilter, selectRates } from '../../redux/selectors.ts';

export const RatesList = () => {
  const rates = useAppSelector(selectRates);

  const filter = useAppSelector(selectFilter);

  const newRates = rates.filter(item => {
    return item[0].toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <ul>
      {newRates.map(item => (
        <li key={item[0]}>
          {item[0]}---{item[1]}
        </li>
      ))}
    </ul>
  );
};
