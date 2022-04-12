import { useState, useEffect } from "react";

import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import pokemon from "./utils/pokemon";

function App() {
  let [deck, setDeck] = useState(pokemon);
  let [curScore, setCurScore] = useState(0);
  let [bestScore, setBestScore] = useState(0);
  let [chosen, setChosen] = useState([]);

  const addScore = (id) => {
    if (chosen.find((monster) => monster === id)) {
      setCurScore(0);
      setChosen([]);
      curScore > bestScore && setBestScore((bestScore = curScore));
    } else {
      setCurScore((curScore += 1));
      setChosen([...chosen, id]);
    }
    if (curScore === 12) {
      alert("You Win");
      setCurScore(0);
      setChosen([]);
      curScore > bestScore && setBestScore((bestScore = curScore));
    }
    setDeck(shuffle([...deck]));
  };

  const shuffle = (arr) => {
    let temp, randIndex;
    let lastIndex = arr.length;
    while (lastIndex--) {
      randIndex = Math.floor(Math.random() * lastIndex);
      temp = arr[lastIndex];
      arr[lastIndex] = arr[randIndex];
      arr[randIndex] = temp;
    }
    return arr;
  };

  useEffect(() => {
    const shuffledPokemon = shuffle([...pokemon]);
    setDeck(shuffledPokemon);
  }, []);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header curScore={curScore} bestScore={bestScore} />
      <main className="h-full flex flex-wrap gap-8 justify-center p-8  max-w-7xl my-0 mx-auto">
        {deck.map((monster) => (
          <Card
            name={monster.name}
            imgUrl={monster.img_url}
            key={monster.id}
            id={monster.id}
            addScore={addScore}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
