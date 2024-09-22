import React from 'react';

const StatusBadge = ({ children }: { children: React.ReactNode }) => {
  return <button className="bg-red-500 px-2 py-1 rounded">{children}</button>;
};

export default StatusBadge;
