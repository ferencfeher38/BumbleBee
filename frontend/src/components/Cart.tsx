import React from "react";
import "../styles/Cart.scss";

type CartProps = {
  items: string[];
  honeyTypes: string[];
  cartItems: { [key: string]: number };
  onRemoveFromCart: (item: string) => void;
  onClearCart: () => void;
  onOrder: () => void;
};

const Cart = function ({
  items,
  honeyTypes,
  cartItems,
  onRemoveFromCart,
  onClearCart,
  onOrder,
}: CartProps) {
  const handleRemoveItem = (item: string) => {
    onRemoveFromCart(item);
  };

  const handleClearCart = function () {
    onClearCart();
  };

  const handleOrder = function () {
    onOrder();
  };

  const renderCartItem = function (item: string) {
    const itemCount = cartItems[item];
    return (
      <div className="cart-container-card" key={item}>
        <div className="cart-item-name">
          {item} ({itemCount})
        </div>
        <button onClick={() => handleRemoveItem(item)}>Törlés</button>
      </div>
    );
  };

  const filteredItems = items.filter((item) => cartItems[item] > 0);

  return (
    <div className="cart-container">
      <div className="cart-container-title">Kosár</div>
      {filteredItems.length === 0 ? (
        <div className="cart-status">A kosár üres.</div>
      ) : (
        <div className="cart-container-main-card">
          <div>{filteredItems.map((item) => renderCartItem(item))}</div>
          <button onClick={handleOrder}>Megrendelés</button>
          <button onClick={handleClearCart}>Kosár ürítése</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
