import { Route, Routes } from "react-router-dom";
import { AboutUs } from "../Pages/AboutUs/AboutUs";
import { Brands } from "../Pages/Brands/Brands";
import { Contact } from "../Pages/Contact/Contact";
import { Favorites } from "../Pages/Favorites/Favorites";
import { Home } from "../Pages/Home/Home";
import { Projects } from "../Pages/Projects/Projects";
import { Showroom } from "../Pages/Showroom/Showroom";

export const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/favoritos" element={<Favorites />} />
      <Route exact path="/marcas" element={<Brands />} />
      <Route exact path="/showrooms" element={<Showroom />} />
      <Route exact path="/proyectos" element={<Projects />} />
      <Route exact path="/nosotros" element={<AboutUs />} />
      <Route exact path="/contacto" element={<Contact />} />
    </Routes>
  );
};
