import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {

    const correctPassword = "flag";

    if (password === correctPassword) {
      localStorage.setItem("auth", "true");
      navigate("/dashboard");
    } else {
      alert("Wrong password!");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Login</h1>
      <input 
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}