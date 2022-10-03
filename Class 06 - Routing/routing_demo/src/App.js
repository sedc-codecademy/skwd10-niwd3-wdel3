import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Recipes } from "./components/Recipes/all-recipes/Recipes";
import { AddRecipe } from "./components/Recipes/add-recipe/AddRecipe";
import { NotFound } from "./components/NotFound/NotFound";
import { useState } from "react";
import { SingleRecipe } from "./components/Recipes/SingleRecipe/SingleRecipe";
import { ComedyMovies, HorrorMovies, Movies } from "./components/Movies/Movies";

const allRecipes = [
  {
    id: "1",
    recipeName: "Pancakes",
    ingrediants: ["Flour", "Water", "Banana"],
  },
  { id: "2", recipeName: "Toast", ingrediants: ["Bread", "Cheese", "Ketchup"] },
  {
    id: "3",
    recipeName: "Soup",
    ingrediants: ["Ingrediant A", "Ingrediant B", "Ingrediant C"],
  },
  {
    id: "4",
    recipeName: "Mashed Potatoes",
    ingrediants: ["Ingrediant A", "Ingrediant B", "Ingrediant C"],
  },
];

function App() {
  // *** NOTE: Might be better the example to be with movies, because a movie can have a category, so we can have outlet as latest big example
  const [recipes, setRecipes] = useState(allRecipes);

  const [movies, setMovies] = useState([
    { id: 1, movieName: "Comedy name movie", category: "comedy" },
    { id: 2, movieName: "Horror name movie", category: "horror" },
  ]);

  /**
   * 1. Bi ni trebalo routing za da napravime/izgradime SPA (single page app), imame 1 file,
   * i renderirame razlicen kontent vo nego
   */
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          {/* First example show in this format */}
          {/* <Route path="*" element={<div>error page</div>} /> */}

          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes recipes={recipes} />} />
          <Route path="/add-recipe" element={<AddRecipe />} />

          {/* After all simple basic routing show path params: */}
          {/* /:id  is actually the key send */}
          <Route
            path="/recipe/:id"
            element={<SingleRecipe recipes={recipes} />}
          />

          {/* Prevent the user type incorrect routes  */}
          {/* <Route path="*" element={<div>error page</div>} />
           */}

          {/* After everything show outlet */}
          <Route path="/movies" element={<Movies />}>
            <Route path="comedy" element={<ComedyMovies />} />
            <Route path="horror" element={<HorrorMovies />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
