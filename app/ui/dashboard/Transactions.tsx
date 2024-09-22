import React from 'react';
import noAvatar from '@/public/noavatar.png';
import Image from 'next/image';
import StatusBadge from '../../../components/StatusBadge';

const Transactions = () => {
  return (
    <section className="border p-6 pb-0 rounded-lg shadow-md">
      <h2 className="text-lg font-bold tracking-wide mb-4">
        Latest Transactions
      </h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-2 px-4 text-white font-semibold">Name</th>
            <th className="py-2 px-4 text-white font-semibold">Status</th>
            <th className="py-2 px-4 text-white font-semibold">Date</th>
            <th className="py-2 px-4 text-white font-semibold">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="py-3 px-4 flex items-center gap-3">
              <Image
                src={noAvatar}
                className="rounded-full"
                width="40"
                height="40"
                alt="user-img"
              />
              <span>John</span>
            </td>
            <td className="py-3 px-4">
              <StatusBadge>Pending</StatusBadge>
            </td>
            <td className="py-3 px-4">14.02.2024</td>
            <td className="py-3 px-4">$3,200</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Transactions;
