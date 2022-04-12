import React from "react";

const Card = (props) => {
  const { name, id, imgUrl, addScore } = props;

  return (
    <div
      className="group cursor-pointer w-44 bg-gray-400 h-64 rounded-lg flex flex-col flex-none items-center p-1.5 hover:bg-red-500 focus:bg-red-500 hover:transition-all ease-in-out duration-300"
      onClick={() => addScore(id)}
    >
      <div className="w-40 h-60 rounded-lg bg-white border-4 flex justify-center items-center px-2">
        <img src={imgUrl} alt="name" />
      </div>
      <h3 className="group-hover:text-white">{name}</h3>
    </div>
  );
};

export default Card;
