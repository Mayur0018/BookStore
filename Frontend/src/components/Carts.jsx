import React from "react";

const Carts = ({ data }) => {
  return (
    <div className="mt-8 p-3">
      <div className="card bg-base-100 w-96 h-92 shadow-sm hover:scale-100 duration-200">
        <figure>
          <img className="w-48" src={data.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {data.name}
            <div className="badge badge-primary bg-blue-500 text-white">
              {data.category}
            </div>
          </h2>
          <p>{data.title}</p>
          <div className="card-actions justify-between  ">
            <div className="badge badge-outline hover:bg-blue-500 hover:text-white cursor-pointer">
              ${data.price}
            </div>
            <div className="badge badge-outline hover:bg-blue-500 hover:text-white cursor-pointer">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
