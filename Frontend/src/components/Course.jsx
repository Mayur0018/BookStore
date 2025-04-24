import React from "react";
import Carts from "./Carts";
import { Link } from "react-router-dom";
import list from "../../public/list.json";
console.log(list);

const Course = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl font-semibold md:text-4xl">
          We're delighted to Have{" "}
          <span className="text-blue-500">You Here !!</span>
        </h1>
        <p className="mt-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo porro
          consequuntur corrupti consectetur et cumque autem, animi
          exercitationem blanditiis laudantium, omnis minus architecto ipsa nam
          tenetur modi nisi sint soluta.
        </p>
        <Link to="/">
          <button className="btn btn-primary mt-5">Back</button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
        {list.map((data) => (
          <Carts key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Course;
