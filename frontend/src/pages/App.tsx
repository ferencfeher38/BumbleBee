import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import HoneyList from "../components/HoneyList";
import CartPage from "./CartPage";
import axios from "axios";
import Bee from "../components/Bee";
import "../styles/App.scss";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ContactPage from "./ContactPage";
import LandingPage from "./LandingPage";

const App = function () {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [cartItems, setCartItems] = React.useState<{ [key: string]: number }>(
    {}
  );
  const honeyTypes = ["Akác", "Napraforgó", "Hárs", "Virág", "Repce"];

  const handleLogin = function () {
    setLoggedIn(true);
  };

  const handleLogout = function () {
    setLoggedIn(false);
    setCartItems({});
  };

  const handleAddToCart = function (item: string) {
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };
      updatedItems[item] = (updatedItems[item] || 0) + 1;
      return updatedItems;
    });
  };

  const handleRemoveFromCart = function (item: string) {
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };
      if (updatedItems[item]) {
        updatedItems[item] -= 1;
        if (updatedItems[item] === 0) {
          delete updatedItems[item];
        }
      }
      return updatedItems;
    });
  };

  const handleClearCart = function () {
    setCartItems({});
  };

  const handleOrder = function () {
    axios
      .post("http://localhost:5000/api/order", { mézek: cartItems })
      .then((response) => {
        console.log("Sikeres megrendelés:", response.data);
        setCartItems({}); // Kosár ürítése sikeres megrendelés után
        alert("Sikeres megrendelés!");
      })
      .catch((error) => {
        console.error("Hiba történt a megrendelés során:", error);
        alert("Hiba történt a megrendelés során. Kérjük, próbálkozzon újra!");
      });
  };

  const filteredCartItems = Object.keys(cartItems).filter(
    (item) => cartItems[item] > 0
  );

  return (
    <Router>
      <div className="app-container">
        <Navigation></Navigation>
        <Bee></Bee>
        <div className="app-title">BumbleBee</div>
        <Routes>
          <Route
            path="/"
            element={
              loggedIn ? (
                <>
                  <button className="logout" onClick={handleLogout}>
                    Kijelentkezés
                  </button>
                  <HoneyList
                    honeyTypes={honeyTypes}
                    onAddToCart={handleAddToCart}
                  />
                </>
              ) : (
                <div className="login-wrapper">
                  <LoginForm onLogin={handleLogin} />
                  <img src="../../img/honey-pot.svg" alt="honey-pot" />
                </div>
              )
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <CartPage
                  cartItems={cartItems}
                  honeyTypes={honeyTypes}
                  onRemoveFromCart={handleRemoveFromCart}
                  onClearCart={handleClearCart}
                  onOrder={handleOrder}
                />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <ContactPage></ContactPage>
              </>
            }
          />
          <Route
            path="/landing"
            element={
              <>
                <LandingPage></LandingPage>
              </>
            }
          />
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
  );
};

export default App;
