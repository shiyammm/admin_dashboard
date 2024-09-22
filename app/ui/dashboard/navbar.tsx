'use client';
import { Input } from '@/components/ui/input';
import { usePathname } from 'next/navigation';
import React from 'react';
import { BsChatRightTextFill } from 'react-icons/bs';
import { IoIosNotifications } from 'react-icons/io';
import { FaGlobeAmericas } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="border py-5 px-7 flex items-center justify-between rounded-md">
      <div>
        <h1 className="capitalize font-bold text-lg">
          {pathname.split('/').pop()}
        </h1>
      </div>
      <div className="flex gap-6 items-center overflow-hidden">
        <div className="flex gap-2 items-center border h-12 px-4 rounded-md">
          <FiSearch size={20} className="text-stone-400" />
          <input
            type="search"
            placeholder="search..."
            className="bg-background rounded-md h-full outline-0 placeholder:text-lg"
          />
        </div>

        <div className="flex items-center gap-4">
          <BsChatRightTextFill size={20} />
          <IoIosNotifications size={20} />
          <FaGlobeAmericas size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
