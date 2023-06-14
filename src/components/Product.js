import React from "react";

import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart_slice";

const Product = ({ name, id, imgURL, price }) => {
  const cartItems = useSelector((state) => state.cart.itemsLists);
  console.log(cartItems.length);
  const dispatch = useDispatch();
  const addToCarts = () => {
    dispatch(
      cartActions.addToCart({
        name,
        id,
        price,
      })
    );
  };
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$$ {price}</p>
      <button onClick={addToCarts}>Adds to cart</button>
    </div>
  );
};
export default Product;
