import type { exchangeInfoResult } from '../../types/types.ts';

interface ExchangeInfoE {
  exchangeInfo: exchangeInfoResult;
}

export const ExchangeInfo = ({ exchangeInfo }: ExchangeInfoE) => {
  return (
    <div>
      <p>{exchangeInfo.to}</p>
      <p>{exchangeInfo.from}</p>
      <p>{exchangeInfo.amount}</p>
      <p>{exchangeInfo.rate}</p>
      <p>{exchangeInfo.result}</p>
    </div>
  );
};
