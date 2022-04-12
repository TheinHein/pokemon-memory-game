import React from "react";

const Scoreboard = ({ curScore, bestScore }) => {
  return (
    <div className=" mb-4 w-full h-8 bg-black  flex justify-center items-center">
      <div className="relative max-w-7xl w-[500px]  flex items-center text-white justify-between">
        <p>Your Score: {curScore}</p>
        <div className="absolute left-[50%] translate-x-[-50%] w-24 h-24 rounded-full bg-white border-black border-[0.9rem]"></div>
        <p>Best Score: {bestScore}</p>
      </div>
    </div>
  );
};

export default Scoreboard;
