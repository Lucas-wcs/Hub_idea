import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeContext";
import Footer from "./components/Footer";
import { UserProvider } from "./components/UserContext";

function App() {
  const location = useLocation();
  return (
    <div
      className="principal-container"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <ThemeProvider>
        <UserProvider>
          {location.pathname !== "/" && <Navbar />}
          <Outlet />
          <div
            className="footer-principale-container"
            style={{ flexGrow: 1 }}
          />
          <Footer />
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
