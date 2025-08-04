import { motion } from "framer-motion";
import "./dashBoard.css";
import "./card.css";

export default function Card({ title, value, icon }) {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="card-icon">{icon}</div>
      <div>
        <h3 className="card-title">{title}</h3>
        <p className="card-value" aria-label={`${title}: ${value}`}>{value}</p>
      </div>
    </motion.div>
  );
}

