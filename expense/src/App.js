import "./App.css";
// import "./App.css";
import ForgotPasswordModal from "./components/Auth/ForgotPasswordModal";
import { useSelector } from "react-redux";
import { HiViewGrid } from "react-icons/hi";
import { ToastContainer } from "react-toastify";
import AllRoutes from "./components/Pages/AllRoutes";
import Header from "./components/Header/Header";

function App() {
  const darkTheme = useSelector((state) => state.theme.dark);
  return (
    <div
      style={{ height: "100vh" }}
      id={darkTheme ? "dark" : "light"}
      className="App"
    >
      <ToastContainer />

      <ForgotPasswordModal />
      <Header />
      <AllRoutes />
    </div>
  );
}

export default App;
