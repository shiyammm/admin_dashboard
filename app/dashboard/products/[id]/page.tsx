import Image from 'next/image';
import React from 'react';
import noProduct from '@/public/noproduct.jpg';

const page = () => {
  return (
    <section className="border p-6">
      <div className="grid grid-cols-[500px,1fr]">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center space-y-4">
            <Image
              src={noProduct}
              className="rounded-full size-72"
              width={100}
              height={100}
              alt="product-image"
            />
            <h1 className="text-md font-semibold">Product Name</h1>
          </div>
        </div>

        <div className="grid space-y-4">
          <label className="text-md font-semibold" htmlFor="productTitle">
            Product Title
          </label>
          <input
            type="text"
            className="bg-black h-14 outline-0 rounded placeholder:capitalize text-md border font-medium pl-4"
            placeholder="Product title"
            id="productTitle"
          />

          <label className="text-md font-semibold" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            className="bg-black h-14 outline-0 rounded placeholder:capitalize text-md border font-medium pl-4"
            placeholder="Price"
            id="price"
          />

          <label className="text-md font-semibold" htmlFor="stock">
            Stock
          </label>
          <input
            type="number"
            className="bg-black h-14 outline-0 rounded placeholder:capitalize text-md border font-medium pl-4"
            placeholder="Stock quantity"
            id="stock"
          />

          <label className="text-md font-semibold" htmlFor="category">
            Category
          </label>
          <select
            name="category"
            id="category"
            className="bg-black outline-0 p-4 border"
          >
            <option className="border font-medium" value="general" selected>
              Choose a Category
            </option>
            <option className="border font-medium" value="electronic">
              Electronic
            </option>
            <option className="border font-medium" value="kitchen">
              Kitchen
            </option>
            <option className="border font-medium" value="phone">
              Phone
            </option>
            <option className="border font-medium" value="laptop">
              Laptop
            </option>
            <option className="border font-medium" value="monitor">
              Monitor
            </option>
          </select>

          <label className="text-md font-semibold" htmlFor="description">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            cols={30}
            rows={10}
            className="bg-black outline-0 rounded placeholder:capitalize text-md border font-medium p-4 w-full"
            placeholder="Product description"
          ></textarea>
        </div>
      </div>
    </section>
  );
};

export default page;
