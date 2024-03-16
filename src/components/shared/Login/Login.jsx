import React from "react";

const Login = () => {
  return (
    <div className="">
      <form className="card-body w-[570px] mx-auto">
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p>
        Already Registered?{" "}
        <Link className="text-blue-600 font-bold" to="/login">
          Login!{" "}
        </Link>{" "}
      </p>
    </div>
  );
};

export default Login;
