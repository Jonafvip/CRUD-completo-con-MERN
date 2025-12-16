import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import "./FormUser.css";

const initialState = {
  name: "",
  email: "",
  address: "",
};

export const UpdateUser = () => {
  const [inputValue, setInputValue] = useState(initialState);
  const [showAlert, setShowAlert] = useState(false); // Estado para la alerta
  const [isExiting, setIsExiting] = useState(false); // Estado para la animación de salida
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/user/${id}`
        );
        setInputValue(response.data);
      } catch (error) {
        console.log("Error al obtener el usuario", error);
      }
    };
    getUser();
  }, [id]);

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
      if (!id) return;
      const response = await axios.put(
        `http://localhost:8000/api/update/user/${id}`,
        inputValue
      );
      console.log("Respuesta del servidor", response.data);
      setShowAlert(true);

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
      alert("Error al actualizar");
    }
  };

  return (
    <form
      className={`form-box ${isExiting ? "form-exit" : ""}`}
      onSubmit={handleSubmit}
    >
      <div className="mb-3">
        <label htmlFor="inputName" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={inputValue.name}
          onChange={handleChange}
          className="form-control"
          id="inputName"
          aria-describedby="emailHelp"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={inputValue.email}
          className="form-control"
          onChange={handleChange}
          id="inputEmail"
          aria-describedby="emailHelp"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputAddress" className="form-label">
          Ciudad
        </label>
        <input
          type="text"
          name="address"
          value={inputValue.address}
          onChange={handleChange}
          className="form-control"
          id="inputAddress"
          aria-describedby="emailHelp"
          required
        />
      </div>
      {showAlert && (
        <Stack
          className="alert-animate"
          sx={{ width: "100%", marginBottom: 2 }}
          spacing={2}
        >
          <Alert severity="success">Actualizacion exitosa.</Alert>
        </Stack>
      )}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
