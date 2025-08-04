import { useState } from "react";
import ModalSelector from "./modalSelector";
import ChatBox from "./chatBox";
import Card from "./card";
import MetricChart from "../ui/metricChart";
import DonutChart from "../ui/donutChart";
import "./dashBoard.css";
import { FaUsers, FaChartLine, FaGlobe, FaTabletAlt } from "react-icons/fa";

export default function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [chatType, setChatType] = useState(null);

  const openChat = (type) => {
    setChatType(type);
    setModalOpen(false);
  };

  return (
    <div className="dashboard-container">

      {/* Métricas */}
      <Card title="Usuarios" value="5,385" icon={<FaUsers />} />
      <Card title="Sesiones" value="9,136" icon={<FaChartLine />} />
      <Card title="Países" value="12" icon={<FaGlobe />} />
      <Card title="Dispositivos" value="5,388" icon={<FaTabletAlt />} />

      {/* Gráfico de barras de usuarios */}
      <div className="chart-section">
        <h2 className="chart-title">Usuarios - Últimos 15 días</h2>
        <MetricChart />
      </div>

      {/* Donut de dispositivos */}
      <div className="chart-box">
        <h2 className="chart-title">Dispositivos</h2>
        <DonutChart />
      </div>

      {/* Donut de redes sociales */}
      <div className="chart-box">
        <h2 className="chart-title">Redes Sociales</h2>
        <DonutChart dataKey="social" />
      </div>

      {/* Botón flotante de chat */}
      <button className="chat-float-btn" onClick={() => setModalOpen(true)}>
        💬
      </button>

      {modalOpen && (
        <ModalSelector onSelect={openChat} onClose={() => setModalOpen(false)} />
      )}

      {chatType && <ChatBox type={chatType} onClose={() => setChatType(null)} />}
    </div>
  );
}
