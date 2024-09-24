import React from 'react';

const page = () => {
  return (
    <section>
      <form action="" className="space-y-7">
        <div className="grid grid-cols-2 gap-8 gap-x-14">
          <input
            type="text"
            className="bg-black h-14 outline-0 rounded placeholder:capitalize text-md border font-medium  pl-4"
            placeholder="title"
          />
          <select
            name="product-category"
            id=""
            className="bg-black outline-0 p-4 border"
          >
            <option className="border" value="general" selected>
              Choose a Category
            </option>
            <option className="border" value="electronic">
              Electronic
            </option>
            <option className="border" value="kitchen">
              Kitchen
            </option>
            <option className="border" value="phone">
              Phone
            </option>
            <option className="border" value="laptop">
              Laptop
            </option>
            <option className="border" value="monitor">
              Monitor
            </option>
          </select>
          <input
            type="number"
            name="number"
            className="bg-black h-14 outline-0 rounded placeholder:capitalize text-md border font-medium  pl-4"
            placeholder="price"
          />
          <input
            type="number"
            name="number"
            className="bg-black h-14 outline-0 rounded placeholder:capitalize text-md border font-medium  pl-4"
            placeholder="stock"
          />
          <input
            type="text"
            name="text"
            className="bg-black h-14 outline-0 rounded placeholder:capitalize text-md border font-medium  pl-4"
            placeholder="color"
          />
          <input
            type="number"
            name="number"
            className="bg-black h-14 outline-0 rounded placeholder:capitalize text-md border font-medium  pl-4"
            placeholder="size"
          />
        </div>
        <textarea
          name="desc"
          id=""
          className="bg-black outline-0 rounded placeholder:capitalize text-md border font-medium  p-4 w-full"
          cols={50}
          rows={10}
          placeholder="Description..."
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
