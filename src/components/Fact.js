import React from "react";

const facts = [
  "Snoopy is NASA's official safety mascot.",
  "The colour of a placebo pill affects its effectiveness.",
  "The human eye can detect a single photon.",
  "You can defeat a boss in the video game 'Metal Gear Solid 3' by not playing the game for a week.",
  "'Panther' is not a species; it refers to a cat of the Panthera family with a black coat. ",
  "Spike Milligan's tombstone reads 'Dúirt mé leat go raibh mé breoite' - 'I told you I was ill.'",
  "The Leicester balloon riot of 1864 claimed no lives, but destroyed one large hydrogen airship.",
  "A baby Echidna or Platypus is called a Puggle. So is a cross between a Beagle and a Pug.",
];

let number = Math.floor(Math.random() * facts.length);

function Fact() {
  return (
    <div className="fact d-none-xs">
      <em>
        <strong>Did you know? </strong>
        {facts[number]}
      </em>
    </div>
  );
}

export default Fact;
