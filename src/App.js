import "./App.css";
import { Header } from "./Components/Header";
import { HomePage } from "./Pages/HomePage";
import { YourMenu } from "./Components/YourMenu";
import { Route, Routes } from "react-router-dom";
import { Meals } from "./Components/Meals";
import { Recipes } from "./Components/Recipes";
import { CategoryRecipes } from "./Components/CategoryRecipes";
import { YourRecipes } from "./Components/YourRecipes";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/yourmenu" exact element={<YourMenu />} />
        <Route path="/yourrecipes" exact element={<YourRecipes />} />
        <Route path="/mealstime" exact element={<Meals />} />
        <Route path="/recipes" exact element={<Recipes />} />
        <Route path="/category/:category" element={<CategoryRecipes />} />
      </Routes>
    </div>
  );
}

export default App;
