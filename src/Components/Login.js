import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login_border mt-5">
        <h1 className="text-center mt-5 ">
          <span className="login_color">SIGN IN</span>
        </h1>
        <form>
          <div className="text-center login_position">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              autoComplete="off"
              className="text-center login_box"
            />
          </div>
          <div className="text-center mt-3">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password "
              autoComplete="off"
              className="text-center login_box"
            />
          </div>
        </form>
        <div>
          <button name="register" className="btn btn-primary login_btn mt-5">
            Log In
          </button>
        </div>
        <div>
          <NavLink to="/signup">
            <button className="btn btn-success create_account mt-5">
              Create New Account
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Login;
