import React from 'react';

const page = () => {
  return (
    <section className="flex items-center justify-center h-screen">
      <form
        action=""
        className="flex flex-col border p-9 size-96 justify-center gap-4"
      >
        <label>Username</label>
        <input
          type="text"
          name="text"
          className="bg-black h-14 outline-0 rounded placeholder:capitalize text-md border font-medium  pl-4"
          placeholder="username"
        />
        <label htmlFor="">Password</label>
        <input
          type="text"
          name="text"
          className="bg-black h-14 outline-0 rounded placeholder:capitalize text-md border font-medium  pl-4"
          placeholder="password"
        />
        <button type="submit" className="px-5 py-2 bg-violet-500 rounded mt-5">
          Submit
        </button>
      </form>
    </section>
  );
};

export default page;
