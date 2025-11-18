"use strict";

function generatePyramid(limit) {
  if (typeof limit !== "number" || Number.isNaN(limit) || limit <= 0) {
    limit = 5;
  }
  for (let row = 1; row <= limit; row++) {
    let line = "";
    for (let col = 1; col <= limit; col++) {
      line += "* ";
    }
    console.log("Row", row, ":", line.trim());
  }
}

generatePyramid(5);

generatePyramid(3);

generatePyramid();

(function varVersion() {
  "use strict";
  var outerLimit = 5;
  for (var i = 1; i <= outerLimit; i++) {
    var pattern = "";
    for (var j = 1; j <= outerLimit; j++) {
      pattern += "*";
    }
    console.log("var version row", i, ":", pattern);
  }
})();
