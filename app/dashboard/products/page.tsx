import Pagination from '@/app/ui/dashboard/Pagination';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import noProduct from '@/public/noproduct.jpg';

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
        <Link href="/dashboard/products/add">
          <button className="bg-violet-500 px-2 py-1 font-semibold rounded">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full text-left border-collapse mt-8">
        <thead>
          <tr className="border-b">
            <th className="px-4 pb-4 text-white">Title</th>
            <th className="px-4 pb-4 text-white">Description</th>
            <th className="px-4 pb-4 text-white">Price</th>
            <th className="px-4 pb-4 text-white">Created At</th>
            <th className="px-4 pb-4 text-white">Stock</th>
            <th className="px-4 pb-4 text-white">Action</th>
          </tr>
        </thead>
        <tbody className="py-4 mt-5">
          <tr className="text-md font-medium">
            <td className="px-4 pt-4 ">
              <div className="flex items-center gap-2">
                <Image
                  src={noProduct}
                  className="rounded-full"
                  width="40"
                  height="40"
                  alt="user-img"
                />
                Iphone
              </div>
            </td>
            <td className="px-4 pt-4 ">
              Lorem ipsum dolor sit amet consectetur
            </td>
            <td className="px-4 pt-4 ">$123</td>
            <td className="px-4 pt-4 ">1234</td>
            <td className="px-4 pt-4 ">34</td>
            <td className="px-2 pt-4 ">
              <div className="space-x-4">
                <Link href="/dashboard/products/test">
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
