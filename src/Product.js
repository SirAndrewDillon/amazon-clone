import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, author, image, price, rating }) {
  const [{}, dispatch] = useStateValue();
  const addToBasket = () => {
    // Add item to the basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        author: author,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
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
              <p>
                <span role="img">⭐</span>
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="Book Cover" />
      <button onClick={addToBasket} className="product__button">
        Add To Cart
      </button>
    </div>
  );
}

export default Product;
