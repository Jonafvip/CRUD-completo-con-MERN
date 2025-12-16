import { useEffect, useState } from "react";
import axios from "axios";
import "./UserTable.css";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export const UserTable = () => {
  const [data, setData] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const useDataAxios = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/users");
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log("Error al obtener los datos de la api", error);
      }
    };
    useDataAxios();
  }, []);

  const onDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/delete/user/${id}`);

      const newData = data.filter((item) => item._id !== id);
      setData(newData);
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    } catch (error) {
      console.log("Error al eliminar", error);
    }
  };

  return (
    <div>
      <Link className="btn btn-primary" to="useFormAdd">
        + Agregar Nuevo Usuario
      </Link>
      {showAlert && (
        <Stack className="alert-animate" sx={{ width: "100%" }} spacing={2}>
          <Alert severity="success">Usuario eliminado Exitosamente</Alert>
        </Stack>
      )}
      {data.length === 0 ? (
        <div className="empty-state">
          <h3>No hay usuarios registrados.</h3>
          <p>¡Comienza agregando uno nuevo!</p>
        </div>
      ) : (
        <table className="table caja">
          <thead className="sub-box">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((datos) => (
              <tr key={datos._id}>
                <td>{datos.name}</td>
                <td>{datos.email}</td>
                <td>{datos.address}</td>
                <td>{new Date(datos.createAt).toLocaleDateString()}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(datos._id)}
                  >
                    delete
                  </button>
                  <Link to={`/update/${datos._id}`} className="btn btn-info">
                    update
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
