import "./App.css";
import { Header } from "./Components/Header";
import { HomePage } from "./Pages/HomePage";
import { YourMenu } from "./Components/YourMenu";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <YourMenu />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/yourrecipes" exact element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
