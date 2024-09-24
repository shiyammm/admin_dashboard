import React from 'react';

const Pagination = () => {
  return (
    <div className="flex items-center justify-between" >
      <button className="py-1 font-semibold px-3 bg-white/20 rounded">Previous</button>
      <button className="py-1 font-semibold px-3 bg-white/20 rounded">Next</button>
    </div>
  );
};

export default Pagination;
