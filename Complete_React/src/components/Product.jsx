import React from "react";

const Product = ({ title, brand, price, rom, ram, camera, fingerPrint }) => {
  return (
    <div>
      <h2>Mobile Name = {title}</h2>
      <h3>Mobile Brand = {brand}</h3>
      <h4>Mobile Price = {price}</h4>
      <h3>ROM = {rom}</h3>
      <h3>RAM = {ram}</h3>
      <h3>Camera = {camera}</h3>
      <h1>Finger Print = {fingerPrint}</h1>
    </div>
  );
};

export default Product;
