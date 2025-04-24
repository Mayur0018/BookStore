import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Navbar />
      <div className="flex  justify-center items-center h-screen">
        {" "}
        <div id="my_modal_3" className=" shadow-md border-0 py-10 px-10">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/">
                <button className="btn btn-sm btn-circle btn-ghost float-end">
                  ✕
                </button>
              </Link>
              <h3 className="font-bold text-lg">SignUp</h3>
              <div className="mt-4">
                <span>Email</span>
                <br></br>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-80 px-3 border rounded-md outline-none mt-4"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="mt-4">
                <span>Password</span>
                <br></br>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="w-80 px-3 border rounded-md outline-none mt-4"
                  {...register("password", { required: true })}
                />
              </div>
              <div className="flex justify-around items-center">
                <button className="btn btn-primary mt-4">Signup</button>
                <p>
                  Have Account ?{" "}
                  <button
                    to="/"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    <span className="text-blue-500">Login</span>
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
