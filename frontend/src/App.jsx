import { Outlet, useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <Navbar />}
      <Outlet />
    </div>
  );
}

export default App;
