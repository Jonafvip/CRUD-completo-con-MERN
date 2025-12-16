import { useState } from "react";
import "./FormUser.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const initialState = {
  name: "",
  email: "",
  address: "",
};
export const FormUser = () => {
  const [inputValue, setInputValue] = useState(initialState);
  const [showAlert, setShowAlert] = useState(false); // Estado para la alerta
  const [isExiting, setIsExiting] = useState(false); // Estado para la animación de salida
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user",
        inputValue
      );
      console.log("Respuesta del servidor", response.data);
      setShowAlert(true);
      setInputValue(initialState);

      // Iniciar animación de salida antes de navegar
      setTimeout(() => {
        setIsExiting(true);
      }, 1200);

      setTimeout(() => {
        navigate("/");
        setShowAlert(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      alert("Error al registrar");
    }
  };

  return (
    <>
      <form
        className={`form-box ${isExiting ? "form-exit" : ""}`}
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={inputValue.name}
            onChange={handleChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={inputValue.email}
            className="form-control"
            onChange={handleChange}
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Ciudad
          </label>
          <input
            type="text"
            name="address"
            value={inputValue.address}
            onChange={handleChange}
            className="form-control"
            id="exampleInputEmail3"
            aria-describedby="emailHelp"
          />
        </div>
        {showAlert && (
          <Stack
            className="alert-animate"
            sx={{ width: "100%", marginBottom: 2 }}
            spacing={2}
          >
            <Alert severity="success">Registro exitoso.</Alert>
          </Stack>
        )}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
