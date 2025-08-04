import { FaHome, FaUser, FaChartBar } from "react-icons/fa";
import "./sideBar.css";

export default function SideBar() {
  return (
    <aside className="sidebar">
      <h2>CRM Corp</h2>
      <nav>
        <a href="#"><FaHome /> Dashboard</a>
        <a href="#"><FaUser /> Clientes</a>
        <a href="#"><FaChartBar /> Reportes</a>
      </nav>
    </aside>
  );
}

