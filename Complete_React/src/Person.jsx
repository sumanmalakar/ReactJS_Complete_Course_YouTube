import React from 'react'
import Superman from './Superman';

const Person = () => {
    const name = "spiderman";
    const age = 30;

    const person = {
      name: "suman",
      age: 18,
      gmail: "suman@gmail.com",
      pincode: 496440,
    };

    const product = {
      title: "iphone",
      model: "iphone - 15",
      price: 65000,
    };
  return (
    <>
      <div>
        <h1>Name = {person.name}</h1>
        <h1>Age = {person.age}</h1>
        <h1>Gmail = {person.gmail}</h1>
        <h1>Pincode = {person.pincode}</h1>
      </div>
      <Superman />
      <div>
        <h3>title = {product.title}</h3>
        <h3>model = {product.model}</h3>
        <h4>price = {product.price}</h4>
      </div>
    </>
  );
}

export default Person