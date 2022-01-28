import { useQuery } from "@apollo/client";
import React from "react";
import { QUERY_PRODUCTS } from "../../utils/queries";
import "../Product/Product.css";

import ProductCard from "../../Components/ProductCard/ProductCard";

const Tops = () => {
  const url = window.location.href;
  const category = url.substring(27);
  const { loading, error, data: category } = useQuery(QUERY_PRODUCTS);

  if (error) {
    console.log("error", error);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  const allShirts = categoryData.category;

  return (
    <div>
      <div className="products-ctn">
        {allShirts.map((product) => {
          return (
            <a href={`shop/${product._id}`}>
              <ProductCard
                name={product.name}
                quantity={product.quantity}
                price={product.price}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Tops;
