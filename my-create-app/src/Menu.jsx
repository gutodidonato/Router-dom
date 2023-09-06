import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="menu">
      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/produtos"> Produtos </Link>
    </nav>
  );
}
export default Menu;
