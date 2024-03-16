import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Login = () => {
  const { user, signInUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const email = form.get("email");

    const password = form.get("password");

    signInUser(email, password)
      .then((result) => {
        console.log("login successfull", result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (     
    <div className="">

     <Navbar></Navbar>
       
 
      
      <form onSubmit={handleLogin} className="card-body w-[570px] mx-auto  ">
        
        <div className="form-control mt-32">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
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
            name="password"
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
          <button className="btn text-black bg-[#F9A51A]">Login</button>
        </div>
      </form>
      <p className="text-center">
       Don't Have An Account ?{" "}
        <Link className="text-yellow-600 font-bold" to="/register">
          please Register!{" "}
        </Link>{" "}
      </p>
    </div>
    
  );
};

export default Login;
