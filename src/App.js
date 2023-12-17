import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// page components

import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
