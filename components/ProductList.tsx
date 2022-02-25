import Product from "./Product";
import React from "react";

const ProductList = (props) => {
    return (React.createElement("div", { className: "product-list" }, props.products.map((product, index) => React.createElement(Product, { product: product, key: index }))));
};
export default ProductList;