import { useQuery } from "@apollo/client";
import React from "react";
import { PRODUCTS_TOPS } from "../../utils/queries";
import "../Product/Product.css";

// import ProductCard from "../../Components/ProductCard/ProductCard";

const Tops = () => {
  const category = "Tops";
  const { loading, error, data } = useQuery(PRODUCTS_TOPS, {
    variables: { category },
  });

  if (error) {
    console.log("error", error);
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(data);

  return (
    <div>
      <div className="products-ctn"> </div>
    </div>
  );
};

export default Tops;
