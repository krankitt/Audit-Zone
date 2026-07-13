import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      <AppRoutes />
    </>
  );
};

export default App;
