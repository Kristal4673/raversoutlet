import { useQuery } from "@apollo/client";
import React from "react";
import { PRODUCTS_ACCS } from "../../utils/queries";
import "../Product/Product.css";

import ProductCard from "../../Components/ProductCard/ProductCard";

const Accessories = () => {
  const category = "Accessories";
  const { loading, error, data } = useQuery(PRODUCTS_ACCS, {
    variables: category,
  });
  if (error) {
    console.log("error", error);
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  const accs = data.productsAccs;
  console.log(accs);
  return (
    <div>
      <div className="products-ctn">
        {accs.map((accs) => {
          return (
            <a href={`shop/${accs._id}`}>
              <ProductCard
                name={accs.name}
                quantity={accs.quantity}
                price={accs.price}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Accessories;
