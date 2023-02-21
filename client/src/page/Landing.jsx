import React, { useEffect, useState } from "react";
import collage from "../assets/collage.jpeg";
// import "../blob/blob.css";

const Landing = () => {
  // const blob = document.getElementById("blob");
  // console.log(blob);
  // document.body.onpointermove = (event) => {
  //   const { clientX, clientY } = event;

  //   blob.animate(
  //     { left: `${clientX}px`, top: `${clientY}px` },
  //     { duration: 3000, fill: "forwards" }
  //   );
  // };

  return (
    <section className="max-w-7xl mx-auto">
      {/* <div id="blob"></div>
      <div id="blur"></div> */}
      <div id="content">
        <h1 className="font-extrabold text-[#ffffff] text-[13vh] max-w-full">
          No Limits, <br /> Just Possibilities!
        </h1>
        <p className="mt-2 text-[#8d99a2] text-[4vh] max-w-full">
          Unleash your creativity with our AI-powered text-to-image generation
          tool - transform your ideas into stunning visuals and bring them to
          life, with no design skills needed.
        </p>
        <img src={collage} className="mt-12 w-full h-56 object-cover" />
      </div>
    </section>
  );
};

export default Landing;
