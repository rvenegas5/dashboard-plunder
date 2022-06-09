import React from "react";
import "./NameOnCard.css";

function NameOnCard() {
  return (
    <div className="name-on-card">
      <p className="the-50-off-item-wil avenir-book-normal-black-15px">
        The 50% OFF item will be applied to the most expensive item in your cart.
        <br />
        Add at least one item to your cart to see the discount.
      </p>
    </div>
  );
}

export default NameOnCard;
