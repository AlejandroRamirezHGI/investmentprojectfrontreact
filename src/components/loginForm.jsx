import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./loginForm.css";

export default function Login({ onLoginSuccess }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  // ✅ Solo una función onSubmit
  const onSubmit = (data) => {
    if (data.email === "tp@gmail.com" && data.password === "012345") {
      onLoginSuccess(); // Esto llama al método del padre (App.jsx)
    } else {
      alert("Credenciales inválidas");
    }
  };

  const accesoDirecto = () => {
    onLoginSuccess(); // ⚠️ Usa esto para simular un login correcto
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Iniciar sesión</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Correo requerido",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Formato no válido"
                }
              })}
            />
            {errors.email && (
              <span className="error">{errors.email.message}</span>
            )}
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              {...register("password", {
                required: "Contraseña requerida",
                minLength: {
                  value: 6,
                  message: "Mínimo 6 caracteres"
                }
              })}
            />
            {errors.password && (
              <span className="error">{errors.password.message}</span>
            )}
          </div>

          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>

        {/* Botón redondo de acceso directo */}
        <button
          onClick={accesoDirecto}
          style={{
            marginTop: "1rem",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "#1e3c72",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.2rem",
            border: "none",
            cursor: "pointer",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            transition: "background-color 0.2s ease"
          }}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = "#16325c")
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = "#1e3c72")
          }
          title="Acceso directo"
        >
          ➜
        </button>
      </div>
    </div>
  );
}
