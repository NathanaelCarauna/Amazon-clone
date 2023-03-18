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
import Checkout from "./pages/Checkout/Checkout";
import Payment from "./pages/Payment/Payment";
import {loadStripe} from "@stripe/stripe-js" 
import {Elements} from "@stripe/react-stripe-js"
import Orders from "./pages/Orders/Orders";

const promise = loadStripe('pk_test_51MkXtZHqezJmjKmIrrSB4YPcq7TAsZixPZlFTj1rKAuoL7OouqsUNBs69UKn8AjLwflf4BdDAf89vFRoZRvZ4c7f00khGYoi7E');

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
        <Route path="/payment" element={
            <>
              <Header/>
              <Elements stripe={promise}>
                <Payment/>
              </Elements>
            </>
          }/>
          <Route path="/product/:id" element={
            <>
              <Header/>
              <SingleProduct/>
            </>
          }/>
          <Route path="/orders" element={
            <>
              <Header/>
              <Orders/>
            </>
          }/>
          <Route path="/checkout" element={
            <>
              <Header/>
              <Checkout/>
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
