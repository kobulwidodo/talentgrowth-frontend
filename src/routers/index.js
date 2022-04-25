import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserWrapper } from "../context/userContext";
import Event from "../pages/Event";
import EventRegister from "../pages/EventRegister";
import Home from "../pages/Home";
import Internship from "../pages/Internship";
import InternshipDetail from "../pages/InternshipDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SuccessRegister from "../pages/SuccessRegister";
import AuthRoute from "./AuthRoute";
import ProtectedRoute from "./ProtectedRoute";

const Routers = () => {
  return (
    <BrowserRouter>
      <UserWrapper>
        <Routes>
          <Route path="/internship" element={<Internship />} />
          <Route path="/event/:type" element={<Event />} />
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/event/:type/:title/:id" element={<EventRegister />} />
            <Route path="/internship/:id" element={<InternshipDetail />} />
            <Route path="/success" element={<SuccessRegister />} />
          </Route>
          <Route element={<AuthRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </UserWrapper>
    </BrowserRouter>
  );
};

export default Routers;
