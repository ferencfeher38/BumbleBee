import React from "react";
import "../styles/pages/ContactPage.scss";

const ContactPage = function () {
  return (
    <div className="contact-container">
      <form>
        <div>
          <input type="text" placeholder="Név" required></input>
        </div>
        <div>
          <input type="email" placeholder="Email" required></input>
        </div>
        <div>
          <textarea placeholder="Üzenet" required></textarea>
        </div>
        <button type="submit">Küldés</button>
      </form>
    </div>
  );
};

export default ContactPage;
