import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles/index.scss";

function App() {
  const location = useLocation();

  return (
    <div className="navbar">
      <Navbar />
      <div>{location.pathname !== "/" && <Navbar />}</div>
      <Outlet />
    </div>
  );
}

export default App;
