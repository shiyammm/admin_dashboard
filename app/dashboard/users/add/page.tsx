import React from 'react';

const page = () => {
  return (
    <section>
      <form action="" className="space-y-7">
        <div className="grid grid-cols-2 gap-8 gap-x-14">
          <input
            type="text"
            className="bg-black h-14 outline-0 rounded placeholder:capitalize text-md border font-medium  pl-4"
            placeholder="username"
          />
          <input
            type="text"
            name="text"
            className="bg-black h-14 outline-0 rounded placeholder:capitalize text-md border font-medium  pl-4"
            placeholder="email"
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
          <select
            name="isActive"
            id=""
            className="bg-black outline-0 p-4 border"
          >
            <option className="border font-medium" value="general" selected>
              isActive?
            </option>
            <option className="border font-medium" value="yes">
              Yes
            </option>
            <option className="border font-medium" value="no">
              No
            </option>
          </select>
          <input
            type="text"
            name="text"
            className="bg-black h-14 outline-0 rounded placeholder:capitalize text-md border font-medium  pl-4"
            placeholder="password"
          />
          <input
            type="number"
            name="number"
            className="bg-black h-14 outline-0 rounded placeholder:capitalize text-md border font-medium  pl-4"
            placeholder="Phone"
          />
        </div>
        <textarea
          name="address"
          id=""
          className="bg-black outline-0 rounded placeholder:capitalize text-md border font-medium  p-4 w-full"
          cols={50}
          rows={10}
          placeholder="Address..."
        ></textarea>
        <button
          type="submit"
          className="w-full bg-violet-500 py-3 font-bold rounded"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default page;
