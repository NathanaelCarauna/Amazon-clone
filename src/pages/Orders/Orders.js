import { collection, onSnapshot, orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Order from "../../components/Order/Order";
import { db } from "../../utils/firebase";
import "./Orders.css";

const Orders = () => {
  const { user } = useSelector((state) => state.data);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      onSnapshot(
        collection(db, "users", user?.uid, "orders"),
        orderBy("created", "desc"),
        (snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
      );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders-order">
        {orders &&
          orders.map((order, index) => <Order order={order} key={index} />)}
      </div>
    </div>
  );
};

export default Orders;
