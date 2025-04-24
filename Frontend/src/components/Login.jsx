import React from "react";

const Login = () => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Login</h3>
          <div className="mt-4">
            <span>Email</span>
            <br></br>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-80 px-3 border rounded-md outline-none mt-4"
            />
          </div>
          <div className="mt-4">
            <span>Password</span>
            <br></br>
            <input
              type="text"
              placeholder="Enter Your Password"
              className="w-80 px-3 border rounded-md outline-none mt-4"
            />
          </div>
          <div className="flex justify-around items-center">
            <button className="btn btn-primary mt-4">Login</button>
            <p>
              Not Registerd ? <span className="text-blue-500"> SignUp</span>
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
