import Register from "../components/From/Register";
import Login from "../components/From/Login";
import { useState } from "react";
const Auth = () => {
  const [form, setForm] = useState(<Register />);

  const register = () => {
    setForm(<Register />);
  };
  const login = () => {
    setForm(<Login />);
  };

  return (
    <div className="flex flex-col items-center ">
      <div>
        <button className="m-4" onClick={register}>
          Register
        </button>
        <button className="m-4" onClick={login}>
          Login
        </button>
      </div>
      <div className="border shadow p-4">{form}</div>
    </div>
  );
};

export default Auth;
