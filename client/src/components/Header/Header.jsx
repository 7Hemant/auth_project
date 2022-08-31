import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { reset, logout } from "../../features/Auth/AuthSlice";
const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onlogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
    console.log("click");
  };
  return (
    <header className="flex justify-between items-center shadow">
      <div className="logo">
        <h1>A/P</h1>
      </div>
      <nav>
        <ul className="flex ">
          <li className="p-4 hover:text-blue-600">
            <Link to="/">Home</Link>
          </li>
          {!user && (
            <li className="p-4  hover:text-blue-600">
              <Link to="/auth">registor/login</Link>
            </li>
          )}
          {user && (
            <>
              <li className="p-4  hover:text-blue-600">
                <Link to="/editor">editor</Link>
              </li>
              <li className="p-4  hover:text-blue-600">
                <button onClick={onlogout}>logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
