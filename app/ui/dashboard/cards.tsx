import React from 'react';
import Card from '@/components/Card';

const Cards = () => {
  return (
    <div className="flex gap-6 items-center">
      <Card
        title="Total Users"
        isProfit={true}
        profitValue="12"
        value="10.928"
      />
      <Card title="Stock" isProfit={false} profitValue="2" value="8.236" />
      <Card title="Revenue" isProfit={true} profitValue="18" value="6.642" />
    </div>
  );
};

export default Cards;
