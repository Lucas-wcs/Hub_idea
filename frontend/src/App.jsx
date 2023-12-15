import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();

  return (
    <div>
      <div>{location.pathname !== "/" && <Navbar />}</div>
      <Outlet />
    </div>
  );
}

export default App;
