"use strict";

console.log("Initial score value (before declaration):", score);
announce();
var score = 50;
function announce() {
  console.log("Game started");
}
let status = "ready";
startGame();
function startGame() {
  console.log("Status inside startGame:", status);
}

(function fixedVersion() {
  "use strict";
  var fixedScore;
  function fixedAnnounce() {
    console.log("Fixed game started");
  }
  fixedScore = 50;
  fixedAnnounce();
  let fixedStatus = "ready";
  const fixedStartGame = function () {
    console.log("Fixed status:", fixedStatus);
  };
  fixedStartGame();
})();

(function arrowVersion() {
  "use strict";
  let arrowScore = 50;
  const arrowAnnounce = () => {
    console.log("Arrow game started with score:", arrowScore);
  };
  let arrowStatus = "ready";
  const arrowStartGame = () => {
    console.log("Arrow status:", arrowStatus);
  };
  arrowAnnounce();
  arrowStartGame();
})();
