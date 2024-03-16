import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="">
      <form className="card-body w-[570px] mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input
            type="email"
            placeholder="First Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input
            type="email"
            placeholder="Last Name"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn text-black bg-[#F9A51A]">
            Create an account
          </button>
        </div>
      </form>
      <p className="text-center">
        Already Registered?{" "}
        <Link className="text-yellow-600 font-bold" to="/login">
          Login!{" "}
        </Link>{" "}
      </p>

      <div className="flex items-center justify-center gap-3 mt-3">
          <hr className="bg-white w-32 " />
          
           <p className="">or</p>
     
        <hr className="bg-white w-32" />
      </div>
    </div>
  );
};

export default Register;
