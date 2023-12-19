import { Outlet, useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeContext";

function App() {
  const location = useLocation();

  return (
    <div>
      <ThemeProvider>
        {location.pathname !== "/" && <Navbar />}
        <Outlet />
      </ThemeProvider>
    </div>
  );
}

export default App;
