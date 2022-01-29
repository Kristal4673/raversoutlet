import { useQuery } from "@apollo/client";
import React from "react";
import { PRODUCTS_TOPS } from "../../utils/queries";
import "../Product/Product.css";

import ProductCard from "../../Components/ProductCard/ProductCard";

const Tops = () => {
  const category = "Tops";
  const { loading, error, data } = useQuery(PRODUCTS_TOPS, {
    variables: category,
  });

  if (error) {
    console.log("error", error);
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  const shirts = data.productsCategory;
  console.log(shirts);

  return (
    <div>
      <div className="products-ctn">
        {shirts.map((top) => {
          return (
            <a href={`shop/${top._id}`}>
              <ProductCard
                name={top.name}
                quantity={top.quantity}
                price={top.price}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Tops;
