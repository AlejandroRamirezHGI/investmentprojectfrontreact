import "./modalSelector.css";

export default function ModalSelector({ onSelect, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Selecciona tu Asistente IA</h2>
        <div className="modal-options">
          <div className="option" onClick={() => onSelect("soporte")}>
            <img src="https://cdn-icons-png.flaticon.com/512/4712/4712106.png" alt="Soporte IA" />
            <span>Soporte IA</span>
          </div>
          <div className="option" onClick={() => onSelect("finanzas")}>
            <img src="https://cdn-icons-png.flaticon.com/512/4712/4712104.png" alt="Asesor Finanzas" />
            <span>Asesor Finanzas</span>
          </div>
        </div>
        <button onClick={onClose} className="close-btn">Cerrar</button>
      </div>
    </div>
  );
}
