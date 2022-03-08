import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div className="App">
      {products.map((val) => (
        <div class="card bg-light mb-3">
          <div class="card-body">
            <img alt="product" class="img-fluid image-style" src={val.image} />
            <h5 class="card-title">{val.title}</h5>
            <p class="card-text">{val.description}</p>
            <p class="bloc_left_price">{val.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
