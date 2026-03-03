import { useState } from "react";
import { useNavigate } from "react-router-dom";

const name = "Priyam";
const dob = "2003";
  


export default function Login() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const correctPassword = `${name}${dob}`;

    if (password === correctPassword) {
      localStorage.setItem("auth", "true");
      navigate("/dashboard");
    } else {
      alert("Wrong password!");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(160deg, #003ab0 0%, #060f4a 50%, #00061f 100%)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(10px)",
          padding: "40px",
          borderRadius: "12px",
          width: "350px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          color: "white",
        }}
      >
        <h1 style={{ marginBottom: "25px" }}>Login</h1>

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "6px",
            border: "none",
            outline: "none",
            fontSize: "16px",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#003ab0",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}