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
      <div className="product-container">
        {products.map((val) => (
          <div className="card bg-light mb-3">
            <div className="card-body">
              <img
                alt="product"
                className="img-fluid image-style"
                src={val.image}
              />
              <h5 className="card-title">{val.title}</h5>
              <p className="card-text">{val.description}</p>
              <p className="bloc_left_price">{val.price}</p>
              <button className="addToCart">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-container">Cart Listing Items</div>
    </div>
  );
}
