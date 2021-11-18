import React, { useState } from "react";

import "./App.css";

const App2 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <h2>{username}</h2>
      <h2>{showPassword ? password : "*".repeat(password.length)}</h2>
      <button onClick={(e) => setShowPassword(!showPassword)}>
        Show/Hide password
      </button>
    </div>
  );
};

export default App2;
