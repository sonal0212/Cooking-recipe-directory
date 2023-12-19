import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// page components
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";
import ThemeSelector from "./components/ThemeSelector";
import { useTheme } from "./hook/useTheme";

function App() {
  const {mode} = useTheme()

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/create" element={<Create />} />
        </Routes>
        <Routes>
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
        <Routes>
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
