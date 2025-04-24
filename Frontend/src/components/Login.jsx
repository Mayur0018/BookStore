import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>

            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4">
              <span>Email</span>
              <br></br>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-80 px-3 border rounded-md outline-none mt-4"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
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
              {errors.password && <span>This field is required</span>}
            </div>
            <div className="flex justify-around items-center">
              <button className="btn btn-primary mt-4">Login</button>
              <p>
                Not Registerd ?{" "}
                <Link to="/Signup">
                  <span className="text-blue-500"> SignUp</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
