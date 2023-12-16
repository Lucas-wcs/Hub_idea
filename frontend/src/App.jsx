import { Outlet, useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Connection from "./pages/Connection";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <Connection />}
      <Outlet />
    </div>
  );
}

export default App;
