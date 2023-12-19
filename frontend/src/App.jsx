import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeContext";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  return (
    <div>
      <ThemeProvider>
        {location.pathname !== "/" && <Navbar />}
        <Outlet />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
