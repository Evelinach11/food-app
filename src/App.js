import "./App.css";
import { Header } from "./Components/Header";
import { HomePage } from "./Pages/HomePage";
import { YourMenu } from "./Components/YourMenu";
import { Route, Routes } from "react-router-dom";
import { MealsTime } from "./Components/MealsTime";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/yourmenu" exact element={<YourMenu />} />
        <Route path="/mealstime" exact element={<MealsTime />} />
      </Routes>
    </div>
  );
}

export default App;
