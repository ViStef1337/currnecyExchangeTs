import { selectExchangeInfo } from '../redux/selectors.ts';
import { useAppSelector } from '../hooks/hooks.ts';
import { ExchangeInfo } from '../components/ExchangeInfo/ExchangeInfo.tsx';
import { Form } from '../components/Form/Form.tsx';

export const Home = () => {
  const exchangeInfo = useAppSelector(selectExchangeInfo);
  return (
    <>
      <Form />
      {exchangeInfo && <ExchangeInfo exchangeInfo={exchangeInfo} />}
    </>
  );
};
