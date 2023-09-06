import Menu from "./Menu.jsx";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
}

export default App;
