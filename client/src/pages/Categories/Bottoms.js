import { useQuery } from "@apollo/client";
import React from "react";
import { PRODUCTS_BOTTOMS } from "../../utils/queries";
import "../Product/Product.css";

import ProductCard from "../../Components/ProductCard/ProductCard";
const Bottoms = () => {
  const category = "Bottoms";
  const { loading, error, data } = useQuery(PRODUCTS_BOTTOMS, {
    variables: category,
  });
  if (error) {
    console.log("error", error);
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  const pants = data.productsBottoms;
  console.log(pants);
  return (
    <div>
      <div className="products-ctn">
        {pants.map((pants) => {
          return (
            <a href={`shop/${pants._id}`}>
              <ProductCard
                name={pants.name}
                quantity={pants.quantity}
                price={pants.price}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Bottoms;
