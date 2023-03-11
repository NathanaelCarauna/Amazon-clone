import "./App.css";
import React, { useEffect } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useDispatch } from "react-redux";
import { auth } from "./utils/firebase";
import { setUser } from "./redux/actions";
import SingleProduct from "./pages/SingleProduct/SingleProduct";

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/product/:id" element={
            <>
              <Header/>
              <SingleProduct/>
            </>
          }/>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
