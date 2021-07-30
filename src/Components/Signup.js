import React from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="signup_border mt-5">
        <h1 className="text-center mt-5 ">
          <span className="signup_color">SIGN UP</span>
        </h1>
        <form>
          <div className="text-center mt-5">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Full Name"
              autoComplete="off"
              className="text-center signup_box"
            />
          </div>

          <div className="text-center mt-3">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              autoComplete="off"
              className="text-center signup_box"
            />
          </div>
          <div className="text-center mt-3">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password "
              autoComplete="off"
              className="text-center signup_box"
            />
          </div>
          <div className="text-center mt-3">
            <input
              type="password"
              name="cpassword"
              id="cpassword"
              placeholder="Confirm Your Password "
              autoComplete="off"
              className="text-center signup_box"
            />
          </div>
          <div className="text-center mt-3">
            <input
              type="text"
              name="work"
              id="work"
              placeholder="Enter Your Profession"
              autoComplete="off"
              className="text-center signup_box"
            />
          </div>
          <div className="text-center mt-3">
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter Contact Number"
              autoComplete="off"
              className="text-center signup_box"
            />
          </div>
          <div className="text-center mt-3">
            <input
              type="number"
              name="rating"
              id="rating"
              placeholder="Rate Yourself between 1-10"
              autoComplete="off"
              className="text-center signup_box"
            />
          </div>
        </form>
        <div>
          <button name="Sign Up" className="btn btn-primary signup_btn mt-5">
            Register
          </button>
        </div>
        <div>
          <NavLink to="/login">
            <button className="btn btn-success signin mt-4">
              Already Have An Account?
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Signup;
