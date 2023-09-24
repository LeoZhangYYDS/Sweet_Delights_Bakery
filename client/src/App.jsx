import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import Cakes from "./pages/Cakes";
import Sweets from "./pages/Sweets";
import Story from "./pages/Stroy";
import Jobs from "./pages/Jobs";
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
          <Route path="/sweets" element={<Sweets />} />
          <Route path="/story" element={<Story />} />
          <Route path="/jobs" element={<Jobs />} />
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
