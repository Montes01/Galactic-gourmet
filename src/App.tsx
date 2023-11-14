import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Index } from "./Pages/Index";
import { Footer } from "./Components/General/Footer";
import { Header } from "./Components/General/Header";
import { FoodList } from "./Pages/FoodList";
function App() {
  return (
    <div className="flex flex-col h-screen justify-start">
      <Header />
      <Routes>
        <Route path="/" Component={Index} />
        <Route path="/FoodList" Component={FoodList} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
