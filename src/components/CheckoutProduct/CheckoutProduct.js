import React from "react";
import "./CheckoutProduct.css";
import { useDispatch } from "react-redux";
import { ShoppingBasketOutlined } from "@material-ui/icons";

const CheckoutProduct = ({ id, title, image, rating, price }) => {
  let dispatch = useDispatch();
  const removeItemFromBasket = () => {};
  return (
    <div className="checkout-product">
      <img src={image} alt="" className="checkout-product-image" />
      <div className="checkout-product-info">
        <p className="checkout-product-title">{title}</p>
        <p className="checkout-product-price">
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
        <div className="checkout-product-rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
        <button onClick={removeItemFromBasket} className="">
          <i>
            <ShoppingBasketOutlined />
          </i>
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
