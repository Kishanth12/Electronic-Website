import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItems from "./ProductItems";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"Latest"} text2={"Collections"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover the newest arrivals in our collection — featuring the latest
          tech gadgets, smart devices, and top-rated electronics carefully
          curated to bring innovation right to your doorstep. Stay ahead of the
          trend with high-performance laptops, mobile phones, and accessories
          that blend quality, style, and affordability only at{" "}
          <span className="font-semibold text-indigo-600">GetItWare</span>.{" "}
        </p>
      </div>
      {/* render products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItems
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
            ratings={item.avgRating}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
