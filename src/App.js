import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./pages/Home/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path="/"></Route>
        </Routes>
        <Header />
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
