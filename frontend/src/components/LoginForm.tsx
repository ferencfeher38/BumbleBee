import React, { useState } from "react";
import axios from "axios";
import "../styles/LoginForm.scss";

type LoginFormProps = {
  onLogin: () => void;
};

const LoginForm = function ({ onLogin }: LoginFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      if (response.data.authenticated) {
        // Belépés sikeres
        setError("");
        onLogin(); // Hívjuk meg a szülő komponens által átadott onLogin függvényt
      } else {
        // Helytelen felhasználónév vagy jelszó
        setError("Érvénytelen belépési adatok!");
      }
    } catch (error) {
      // Hiba történt a kérés során
      setError("Hiba történt a belépés során!");
    }
  };

  return (
    <div className="login-form-container">
      <div className="login-form-title">Belépés</div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Felhasználónév"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Jelszó"
      />
      <button onClick={handleLogin}>Belépés</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginForm;
