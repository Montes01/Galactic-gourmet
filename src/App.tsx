import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Index } from "./Pages/Index";
import { Footer } from "./Components/General/Footer";
import { Header } from "./Components/General/Header";
import { FoodList } from "./Pages/FoodList";
import { About } from "./Pages/About";
import { Contact } from "./Components/Contact/Contact";
function App() {
  return (
    <div className="flex flex-col h-screen justify-start">
      <Header />
      <Routes>
        <Route path="/" Component={Index} />
        <Route path="/FoodList" Component={FoodList} />
        <Route path="/About" Component={About} />
        <Route path="/Contact" Component={Contact} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
