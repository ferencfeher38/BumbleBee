import React from "react";
import { Link } from "react-router-dom";
import "../styles/HoneyList.scss";

type HoneyListProps = {
  honeyTypes: string[];
  onAddToCart: (item: string) => void;
};

const HoneyList = function ({ honeyTypes, onAddToCart }: HoneyListProps) {
  const handleAddToCart = (item: string) => {
    onAddToCart(item);
  };

  return (
    <div className="honey-list-container">
      <div className="honey-list-container-title">Mézfajták</div>
      <div className="honey-list-container-list">
        {honeyTypes.map((type) => (
          <div className="honey-list-container-list-card" key={type}>
            <img
              className="honey-list-image"
              src={`../../img/${type}.png`}
              alt={type}
            />

            <div className="honey-list-type-name">{type}</div>
            <button onClick={() => handleAddToCart(type)}>Kosárba</button>
          </div>
        ))}
      </div>
      <Link className="go-to-cart" to="/cart">
        Tovább a kosárhoz
      </Link>
    </div>
  );
};

export default HoneyList;
