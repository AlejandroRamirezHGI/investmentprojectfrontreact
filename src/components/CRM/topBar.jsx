import "./topBar.css";

export default function TopBar({ userName }) {
  return (
    <header className="topbar">
      <span className="title">CRM Corporativo</span>
      <div className="user">Bienvenido, {userName}</div>
    </header>
  );
}
