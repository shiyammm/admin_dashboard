import Image from 'next/image';
import React from 'react';
import noAvatar from '@/public/noavatar.png';
import { getUser } from '@/lib/action';

const page = async () => {

  return (
    <section className="border p-6">
      <div className="grid grid-cols-[500px,1fr]">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center space-y-4">
            <Image
              src={noAvatar}
              className="rounded-full size-72"
              width={100}
              height={100}
              alt="profile-picture"
            />
            <h1 className="text-md font-semibold">John</h1>
          </div>
        </div>
        <div className="grid space-y-4">
          <label className="text-md font-semibold" htmlFor="">
            Username
          </label>
          <input
            type="text"
            className="bg-black h-14 outline-0 rounded placeholder:capitalize text-md border font-medium  pl-4"
            placeholder="username"
          />
          <label className="text-md font-semibold" htmlFor="">
            Email
          </label>
          <input
            type="text"
            name="text"
            className="bg-black h-14 outline-0 rounded text-md border font-medium  pl-4"
            placeholder="example@yourmail.com"
          />
          <label className="text-md font-semibold" htmlFor="">
            Password
          </label>
          <input
            className="bg-black h-14 outline-0 rounded placeholder:capitalize text-md border font-medium  pl-4"
            type="text"
            name="password"
          />
          <label className="text-md font-semibold" htmlFor="">
            Phone
          </label>
          <input
            className="bg-black h-14 outline-0 rounded placeholder:capitalize text-md border font-medium  pl-4"
            type="number"
            name="Phone"
          />
          <select
            name="isAdmin"
            id=""
            className="bg-black outline-0 p-4 border"
          >
            <option className="border font-medium " value="general" selected>
              isAdmin?
            </option>
            <option className="border font-medium " value="yes">
              Yes
            </option>
            <option className="border font-medium " value="no">
              No
            </option>
          </select>

          <label className="text-md font-semibold" htmlFor="">
            Address
          </label>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            className="bg-black outline-0 rounded placeholder:capitalize text-md border font-medium  p-4 w-full"
          ></textarea>
        </div>
      </div>
    </section>
  );
};

export default page;
