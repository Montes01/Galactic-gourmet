import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Index } from "./Pages/Index";
import { Footer } from "./Components/General/Footer";
import { Header } from "./Components/General/Header";
import { FoodList } from "./Pages/FoodList";
import { About } from "./Pages/About";
import { Contact } from "./Components/Contact/Contact";
import { Item } from "./Pages/Item";
import { Error } from "./Pages/Error";
function App() {
  return (
    <div className="flex flex-col h-screen justify-start">
      <Header />
      <div id="navigator" className="flex flex-col flex-grow">
        <Routes>
          <Route path="/" Component={Index} />
          <Route path="/FoodList/:filter" Component={FoodList} />
          <Route path="/About" Component={About} />
          <Route path="/Contact" Component={Contact} />
          <Route path="/Food/:title" Component={Item} />
          <Route path="/Err" Component={Error} />
          <Route path="/Food" Component={Error} />
          <Route path="/FoodList" Component={Error} />
        </Routes>
      <Footer />
      </div>
    </div>
  );
}

export default App;
