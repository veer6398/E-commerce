import React, { useContext, useState } from "react";
import star from '../Assets/star_icon.png';
import stardull from '../Assets/star_dull_icon.png';
import { ShopContext } from "../context/shopcontext";
import toast from 'react-hot-toast';

const Display = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const [mainImage, setMainImage] = useState(product.image);
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="px-4 md:px-10 mt-10 max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Thumbnail Images */}
        <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible">
          {[product.image, product.image, product.image].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${product.name} thumbnail ${idx + 1}`}
              className="h-28 w-28 object-cover rounded cursor-pointer border hover:border-black"
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>

        {/* Main Product Image */}
        <div className="flex-shrink-0">
          <img
            src={mainImage}
            alt={product.name}
            className="w-full max-w-md object-cover rounded"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col">
          <h1 className="font-bold text-2xl md:text-4xl text-[#3d3d3d]">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-4">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={star} alt="star" className="w-5 h-5" />
            ))}
            <img src={stardull} alt="half-star" className="w-5 h-5" />
            <p className="ml-2 text-gray-600 text-sm">(122)</p>
          </div>

          {/* Pricing */}
          <div className="flex gap-5 text-xl md:text-2xl font-bold mt-4">
            <p className="line-through text-gray-500">${product.old_price}</p>
            <p className="text-red-500">${product.new_price}</p>
          </div>

          {/* Description */}
          <div className="mt-6 text-gray-700 leading-relaxed text-sm md:text-base">
            <p className="mb-2">Stay Warm and Stylish with Our Winter Clothing Collection</p>
            <p>
              Embrace the chill in style with our winter clothing collection, designed to keep you warm and cozy without compromising on fashion. From snug jackets and insulated coats to soft knit sweaters and wool scarves...
            </p>
          </div>

          {/* Size Selection */}
          <div className="mt-10">
            <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">Select Size</h2>
            <div className="flex gap-4 flex-wrap">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <div
                  key={size}
                  role="button"
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-3 rounded cursor-pointer font-medium 
                    ${selectedSize === size ? "bg-black text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => {addToCart(product.id);toast.success("Added to cart!");}}
            className="my-10 px-5 py-4 text-base font-semibold w-[200px] text-white bg-red-600 rounded hover:bg-red-700 transition-colors"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Display;
