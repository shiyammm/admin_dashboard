import React from 'react';
import { FiSearch } from 'react-icons/fi';
import noAvatar from '@/public/noavatar.png';
import Image from 'next/image';
import Pagination from '@/app/ui/dashboard/Pagination';
import Link from 'next/link';

const page = () => {
  return (
    <section className="border p-6 space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 border py-2.5 px-4">
          <FiSearch size={20} className="text-stone-400" />
          <input
            type="search"
            placeholder="search for a user"
            className="bg-background rounded-md h-9 outline-0 placeholder:text-lg "
          />
        </div>
        <Link href="/dashboard/users/add">
          <button className="bg-violet-500 px-2 py-1 font-semibold rounded">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full text-left border-collapse mt-8">
        <thead>
          <tr className="border-b">
            <th className="px-4 pb-4 text-white">Name</th>
            <th className="px-4 pb-4 text-white">Email</th>
            <th className="px-4 pb-4 text-white">Created At</th>
            <th className="px-4 pb-4 text-white">Role</th>
            <th className="px-4 pb-4 text-white">Status</th>
            <th className="px-4 pb-4 text-white">Action</th>
          </tr>
        </thead>
        <tbody className="py-4 mt-5">
          <tr className="text-md font-medium">
            <td className="px-4 pt-4 ">
              <div className="flex items-center gap-2">
                <Image
                  src={noAvatar}
                  className="rounded-full"
                  width="40"
                  height="40"
                  alt="user-img"
                />
                John
              </div>
            </td>
            <td className="px-4 pt-4 ">email.com</td>
            <td className="px-4 pt-4 ">0838293</td>
            <td className="px-4 pt-4 ">client</td>
            <td className="px-4 pt-4 ">passive</td>
            <td className="px-2 pt-4 ">
              <div className="space-x-4">
                <Link href="/dashboard/users/test">
                  <button className="px-2 py-1 bg-green-500 rounded font-bold text-md">
                    View
                  </button>
                </Link>
                <button className="px-2 py-1 bg-red-500 rounded font-bold text-md">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </section>
  );
};

export default page;
