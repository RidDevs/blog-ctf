import { useState } from "react";

const name = "Priyam";
const dob = "2003";

export default function Dashboard() {
  const isAuth = localStorage.getItem("auth");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState("");
  const [cleared, setCleared] = useState(false);

  if (!isAuth) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(160deg, #003ab0 0%, #060f4a 50%, #00061f 100%)",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2>Unauthorized</h2>
      </div>
    );
  }

  const handleGenerate = () => {
    const correctPassword = `${name}${dob}`;

    if (password.trim() === correctPassword) {
      setFlag(`FLAG{${name}_${dob}_R2}`);
      setCleared(true);
    } else {
      alert("Incorrect password.");
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
          width: "400px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          color: "white",
        }}
      >
        <h1>This is you Answer</h1>

        {!cleared && (
          <>
            <p style={{ marginTop: "15px", lineHeight: "1.6" }}>
              You found the first flag.  
              Enter the password again to generate the final flag.
            </p>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "20px",
                marginBottom: "20px",
                borderRadius: "6px",
                border: "none",
                outline: "none",
                fontSize: "16px",
              }}
            />

            <button
              onClick={handleGenerate}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "6px",
                border: "none",
                backgroundColor: "#003ab0",
                color: "white",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Generate Flag
            </button>
          </>
        )}

        {flag && (
          <div
            style={{
              marginTop: "25px",
              background: "rgba(0,0,0,0.4)",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <p style={{ fontWeight: "bold" }}>{flag}</p>
            <p style={{ marginTop: "10px", color: "#4caf50" }}>
              ✅ Round 2 Cleared
            </p>
          </div>
        )}
      </div>
    </div>
  );
}