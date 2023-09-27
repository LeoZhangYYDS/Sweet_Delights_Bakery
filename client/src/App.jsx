import { Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import Cakes from "./pages/Cakes";
import Desserts from "./pages/Desserts";
import Story from "./pages/Stroy";
import Jobs from "./pages/Jobs";
import NotFound from "./pages/NotFound";

//auth
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/auth/Dashboard";

//components
import Layout from "./components/layout/Layout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* pages */}
        <Route path="/" element={<Home />} />
        <Route path="/cakes" element={<Cakes />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/story" element={<Story />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="*" element={<NotFound />} />
        {/* auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
