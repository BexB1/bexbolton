import React from "react";

const facts = [
  "Snoopy is NASA's official safety mascot.",
  "The colour of a placebo pill affects its effectiveness.",
  "The human eye can detect a single photon.",
  "There is a boss in the video game 'Metal Gear Solid 3' that can be defeated by not playing the game for a week.",
  "Dogs can't look up.",
];

let number = Math.floor(Math.random() * facts.length);

function Fact() {
  return (
    <div className="quote">
      <em>
        <strong>Did you know? </strong>
        {facts[number]}
      </em>
    </div>
  );
}

export default Fact;
