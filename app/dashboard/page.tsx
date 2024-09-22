import React from 'react';
import Cards from '@/app/ui/dashboard/cards';
import Transactions from '@/app/ui/dashboard/Transactions';
import Charts from '../ui/dashboard/Charts';
import RightBar from '../ui/dashboard/RightBar';

const Dashboard = () => {
  return (
    <section className=" space-x-5 grid grid-cols-[1fr,400px]">
      <div className="space-y-5">
        <Cards />
        <Transactions />
        <Charts />
      </div>
      <RightBar />
    </section>
  );
};

export default Dashboard;
