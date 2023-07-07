import { Routes, Route } from "react-router-dom";
import Home from "path/to/pages/Home";
import About from "path/to/pages/About";
import Products from "path/to/pages/Products";
import NotFound from "path/to/pages/NotFound";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Movies />} />
        <Route path="/products" element={<Movie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};