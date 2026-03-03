export default function Dashboard() {

  const isAuth = localStorage.getItem("auth");

  if (!isAuth) {
    return <h2>Unauthorized</h2>;
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Admin Dashboard</h1>
      <p>Congratulations! You found the hidden password.</p>
    </div>
  );
}