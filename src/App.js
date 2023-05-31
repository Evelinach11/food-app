import "./App.css";
import { Header } from "./Components/Header";
import { HomePage } from "./Pages/HomePage";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/yourrecipes" exact element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
