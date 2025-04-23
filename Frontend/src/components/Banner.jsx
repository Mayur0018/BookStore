import React from "react";
import BannerImg from "../../public/banner.jpg";
const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-20">
      <div></div>
      <div className=" order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
        <div className=" space-y-6">
          <h1 className=" text-4xl font-bold">
            Hello ,Welcomes Here To learn Somthing{" "}
            <span className="text-blue-500">New Everday!!!</span>{" "}
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo harum
            minima, ut at totam necessitatibus tempora veniam et eligendi
            laudantium dolorem nesciunt? Quos iste sapiente architecto mollitia
            ipsum molestiae quam?
          </p>
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" placeholder="mail@site.com" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        <button className="btn btn-neutral">Neutral</button>
      </div>
      <div className=" order-1 w-full md:w-1/2">
        <img  src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
