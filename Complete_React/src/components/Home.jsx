import React from "react";
import Person from "./Person";
import Suman from "./components/Test";
import Product from "./components/Product";
import Person2 from "./components/Person2";
import Person3 from "./components/Person3";
import Laptop from "./components/Laptop";
import Events from "./components/Events";
import Counter from "./components/Counter";
import ShowProduct from "./components/ShowProduct";
import FilterProduct from "./components/FilterProduct";
const Home = () => {
  return (
    <div>
      <div>
        {/* <Person /> */}
        {/* <h1>App is entry point</h1> */}
        {/* <Suman /> */}

        {/* <Product
        title="Galaxy S24 Ultra"
        brand="Samsung"
        price={150000}
        ram="8 GB"
        rom="128 GB"
        camera="200 Mp"
      />

      <Product
        title="I phone - 16"
        brand="Apple"
        price={750000}
        fingerPrint="yes"
      />

      <Product title="OnePlus 13" brand="OnePlus" price={350000} /> */}
      </div>
      <div>
        {/* <Person2 name="suman" age="18" salary={500000} />
        <Person2 name="superman" age="118" salary={5000} />
        <Person2 name="spiderman" age="318" salary={100} ram="ram" /> */}
      </div>
      <div>
        {/* <Person3 name="suman" age={28} panCard={true} price = {100} /> */}
      </div>
      <div>
        {/* <Laptop brandName="hp" model="probook" price={150000} />
        <Laptop brandName="lenovo" model="yoga" price={250000} />
        <Laptop brandName="dell" model="inspiron" price={50000} /> */}
      </div>
      <div>{/* <Events /> */}</div>
      <div>{/* <Counter /> */}</div>
      <div>{/* <ShowProduct /> */}</div>
      <div>
        <FilterProduct />
      </div>
    </div>
  );
};

export default Home;
