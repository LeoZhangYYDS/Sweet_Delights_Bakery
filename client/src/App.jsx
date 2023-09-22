import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import Cakes from "./pages/Cakes";
import Breads from "./pages/Breads";
import NotFound from "./pages/NotFound";

//auth
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
//components
import Layout from "./components/layout/Layout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* pages */}
          <Route path="/" element={<Home />} />
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/breads" element={<Breads />} />
          <Route path="*" element={<NotFound />} />
          {/* auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
