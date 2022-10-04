import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Recipes } from "./components/Recipes/all-recipes/Recipes";
import { Header } from "./components/Header/Header";
import { AddRecipe } from "./components/Recipes/add-recipe/AddRecipe";
import { NotFound } from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      {/* this h1 will be displayed all over the app no matter what the route is :) */}
      {/* <h1 style={{ color: "blue" }}>Shared test message at top</h1> */}
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/add-recipe" element={<AddRecipe />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* this h1 will be displayed all over the app no matter what the route is :) */}
        {/* <h1 style={{ color: "pink" }}>Shared test message at bottom</h1> */}
      </BrowserRouter>
    </div>
  );
}

// localhost:3000 => <ComponentA />
// localhost:3000/recipes => <ComponentB />
// localhost:3000/add-recipe => <ComponentC />

export default App;
