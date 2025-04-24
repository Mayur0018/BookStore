import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Carts from "./Carts";

import list from "../../public/list.json";
const Freebook = () => {
  const FilterData = list.filter((items) => items.category === "Free");
  console.log(FilterData);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div>
          <h1 className=" font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            aliquam totam, dolore itaque est sint. Doloremque suscipit,
            obcaecati amet voluptates beatae nihil, quod aut, omnis officiis
            assumenda modi perferendis sit.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {FilterData.map((data)=>(
                <Carts data = {data} key={data.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebook;
