import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../components/Cart";
import "../styles/pages/CartPage.scss";

type CartPageProps = {
  cartItems: { [key: string]: number };
  honeyTypes: string[];
  onRemoveFromCart: (item: string) => void;
  onClearCart: () => void;
  onOrder: () => void;
};

const CartPage = ({
  cartItems,
  honeyTypes,
  onRemoveFromCart,
  onClearCart,
  onOrder,
}: CartPageProps) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div>
      <Cart
        items={Object.keys(cartItems)}
        honeyTypes={honeyTypes}
        cartItems={cartItems}
        onRemoveFromCart={onRemoveFromCart}
        onClearCart={onClearCart}
        onOrder={onOrder}
      />
      <button className="back-button" onClick={handleGoBack}>
        Vissza a mézekhez
      </button>
    </div>
  );
};

export default CartPage;
