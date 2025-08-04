import "./dashBoard.css";

export default function ChartContainer({ title, children, fullWidth = false }) {
  const containerClass = fullWidth ? "chart-section" : "chart-box";
  return (
    <div className={containerClass}>
      <h2 className="chart-title">{title}</h2>
      {children}
    </div>
  );
}
