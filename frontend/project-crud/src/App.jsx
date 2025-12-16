import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserTable } from "./components/UserTable";
import { FormUser } from "./components/FormUser";
import { UpdateUser } from "./components/UpdateUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserTable />} />
          <Route path="/useFormAdd" element={<FormUser />} />
          <Route path="/update/:id" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
