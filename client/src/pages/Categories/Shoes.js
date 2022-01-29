import { useQuery } from "@apollo/client";
import React from "react";
import { PRODUCTS_SHOES } from "../../utils/queries";
import "../Product/Product.css";

import ProductCard from "../../Components/ProductCard/ProductCard";

const Shoes = () => {
  const category = "Shoes";
  const { loading, error, data } = useQuery(PRODUCTS_SHOES, {
    variables: category,
  });
  if (error) {
    console.log("error", error);
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  const kicks = data.productsShoes;
  console.log(kicks);
  return (
    <div>
      <div className="products-ctn">
        {kicks.map((kicks) => {
          return (
            <a href={`shop/${kicks._id}`}>
              <ProductCard
                name={kicks.name}
                quantity={kicks.quantity}
                price={kicks.price}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Shoes;
