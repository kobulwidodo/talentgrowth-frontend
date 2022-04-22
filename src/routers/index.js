import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Internship from "../pages/Internship";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internship" element={<Internship />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
