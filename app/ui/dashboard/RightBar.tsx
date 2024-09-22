import { usefulInfo } from '@/constants/data';
import React from 'react';

const RightBar = () => {
  return (
    <article className="h-full">
      <div className="space-y-4">
        {usefulInfo.map(
          ({
            subject,
            title,
            subtitle,
            description,
            buttonText,
            buttonIcon: Icon,
          }) => (
            <div key={title} className=" border p-9 space-y-3">
              <h4 className="text-lg font-bold text-white">{subject}</h4>
              <p className="text-xl font-bold">{title}</p>
              <p className="text-sm font-medium text-white/50">{subtitle}</p>
              <p className="text-md font-semibold text-white/50">
                {description}
              </p>
              <button className="flex gap-2 bg-violet-600 px-3 py-2 items-center rounded">
                {<Icon size={20} />}
                {buttonText}
              </button>
            </div>
          ),
        )}
      </div>
    </article>
  );
};

export default RightBar;
