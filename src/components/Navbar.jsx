import { Link } from "react-router-dom";
import { useTheme } from "../hook/useTheme";
import "./Navbar.css";
import Searchbar from "./Searchbar";

export default function Navbar() {
  const { color, mode } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Recipes</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}
