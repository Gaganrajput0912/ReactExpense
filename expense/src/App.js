import "./App.css";
// import "./App.css";
import { ToastContainer } from "react-toastify";
import AllRoutes from "./components/Pages/AllRoutes";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <AllRoutes />
    </div>
  );
}

export default App;
