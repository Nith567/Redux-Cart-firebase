import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/Notification";
import { uiActions } from "./store/ui_slice";

let firstrender = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  useEffect(() => {
    if (firstrender) {
      firstrender = false;
      return;
    }
    const sendReq = async () => {
      dispatch(
        uiActions.setNotification({
          open: true,
          message: "Sending Request ",
          type: "warning",
        })
      );
      const res = await fetch(
        "https://cart-redux-e02f4-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
      //sending state as request is succesfully completed done
      dispatch(
        uiActions.setNotification({
          open: true,
          message: "Sending Reqest to the database successfully ++ ",
          type: "success",
        })
      );
    };
    sendReq().catch((err) => {
      dispatch(
        uiActions.setNotification({
          open: true,
          message: "Sending Request Failed ",
          type: "error",
        })
      );
    });
  }, [cart]);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div className="App">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
