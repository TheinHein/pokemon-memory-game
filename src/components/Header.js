import React from "react";
import Scoreboard from "./Scoreboard";

const Header = ({ curScore, bestScore }) => {
  return (
    <header className=" w-full h-fit flex flex-col items-center">
      <h1 className="tracking-wide text-3xl w-full h-20 pl-3 pt-1 text-center bg-red-500/100 text-white">
        Pokémon Memory Game
      </h1>
      <Scoreboard curScore={curScore} bestScore={bestScore} />
    </header>
  );
};

export default Header;
