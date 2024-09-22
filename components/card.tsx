import React from 'react';
import { AiFillDollarCircle } from 'react-icons/ai';

type cardProps = {
  title: string;
  isProfit: boolean;
  profitValue: string;
  value: string;
};

const card = ({ title, isProfit, profitValue, value }: cardProps) => {
  return (
    <div className="flex items-start p-6 border w-full">
      <div>
        <AiFillDollarCircle size={24} />
      </div>
      <div className="px-4 space-y-3">
        <h1 className="text-lg font-semibold">{title}</h1>
        <span className="text-xl font-bold inline-block">{value}</span>
        <p className="text-lg font-medium tracking-wide">
          <span
            className={`${isProfit ? 'text-green-600' : 'text-red-600'} mr-1`}
          >
            {profitValue}%
          </span>
          {isProfit ? (
            <span className="mr-1">more</span>
          ) : (
            <span className="mr-1">less</span>
          )}
          than last week
        </p>
      </div>
    </div>
  );
};

export default card;
