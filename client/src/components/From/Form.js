import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset, login, register } from "../../features/Auth/AuthSlice";
const Form = (props) => {
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  //ref
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const password2 = useRef();

  // useEffect
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);
  //form Handler
  const formhandler = (e) => {
    e.preventDefault();

    //register from handler logic
    if (props.register === true) {
      if (password.current.value !== password2.current.value) {
        console.log("password do not match");
      } else {
        const userData = {
          name: name.current.value,
          email: email.current.value,
          password: password.current.value,
        };

        dispatch(register(userData));
      }
    } else {
      const userData = {
        email: email.current.value,
        password: password.current.value,
      };

      dispatch(login(userData));
    }
  };
  if (isLoading) {
    return <h1>loading</h1>;
  }
  return (
    <form onSubmit={formhandler}>
      {props.register === true ? (
        <>
          <input
            type="text"
            placeholder="name"
            ref={name}
            className="m-2 shadow"
          />
          <br />
        </>
      ) : (
        ""
      )}

      <input
        type="email"
        name="email"
        placeholder="email"
        id="email"
        ref={email}
        className="m-2 shadow"
      />
      <br />
      <input
        type="password"
        placeholder="password"
        ref={password}
        className="m-2 shadow"
      />
      <br />
      {props.register === true ? (
        <>
          <input
            type="password"
            placeholder="confrim password"
            ref={password2}
            className="m-2 shadow"
          />
          <br />
        </>
      ) : (
        ""
      )}
      <button
        type="submit"
        className="bg-blue-500 p-1 rounded hover:translate-y-1 hover:translate-x-1 transition-all"
      >
        {props.register === true ? "register" : "Login"}
      </button>
    </form>
  );
};

export default Form;
