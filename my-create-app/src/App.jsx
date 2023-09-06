import Menu from "./Menu.jsx";
import { Outlet } from "react-router-dom";
import "./App.css";
import Rodape from "./Rodape.jsx";

function App() {
  return (
    <>
      <Menu />
      <Outlet />
      <Rodape />
    </>
  );
}

export default App;
