import React from "react";
import "./Product.css";

function Product({ id, title, author, image, price, rating }) {
  return (
    <div className="product">
        <div className="product__info">
      <p>{title}</p>
      <p>{author}</p>
      <p className="product__price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_) => (
            <p><span role="img">⭐</span></p>
          ))}
      </div>
      </div>
      <img src={image} alt="Book Cover"/>
      <button>Add To Cart</button>
      </div>
    
  );
}

export default Product;
