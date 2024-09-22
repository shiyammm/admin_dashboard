import Image from 'next/image';
import React from 'react';
import noAvatar from '@/public/noavatar.png';
import { menuItems } from '@/constants/data';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="space-y-5 py-6 shadow rounded-md border">
      <div className="flex items-center gap-4 px-10">
        <div className="w-10 h-10">
          <Image
            src={noAvatar}
            width={100}
            height={100}
            alt="Avatar"
            className="rounded-full"
          />
        </div>
        <div>
          <h1>John</h1>
          <span>Administrator</span>
        </div>
      </div>
      <div className="px-3 space-y-6">
        {menuItems.map((menus) => (
          <ul key={menus.title} className="space-y-4 overflow-hidden">
            <div className="py-4 px-4">{menus.title}</div>
            {menus.list.map((menuItem) => (
              <li key={menuItem.title} className="py-4 hover:bg-secondary px-10  border rounded-xl border-none text-md flex item-center gap-3 ">
                <menuItem.icon size={20} />
                <Link href={menuItem.path}>{menuItem.title}</Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
