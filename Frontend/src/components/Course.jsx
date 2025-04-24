import React from "react";
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo porro
          consequuntur corrupti consectetur et cumque autem, animi
          exercitationem blanditiis laudantium, omnis minus architecto ipsa nam
          tenetur modi nisi sint soluta.
        </p>
      </div>
    </div>
  );
};

export default Course;
