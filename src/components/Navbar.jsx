import "./Navbar.css";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to={"/"} className="brand">
          <h1>Cooking Recipes</h1>
        </Link>
        <Searchbar />
        <Link to={"/create"}>Create New Recipes</Link>
      </nav>
    </div>
  );
}
