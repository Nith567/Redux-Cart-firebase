import React from "react";
import Cart from "./Cart";
import "./Header.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth_slice";
const Header = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart />
          </li>
          <button
            style={{
              padding: "10px",
              margin: "19px",
              fontSize: "19px",
            }}
            className="logout-btn"
            onClick={logoutHandler}
          >
            Logout
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
