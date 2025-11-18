"use strict";

function outer() {
  console.log("Outer first log of count:", count);
  var count = 5;
  console.log("Outer after declaration count:", count);
  function inner() {
    console.log("Inner first log of count:", count);
    var count = 10;
    console.log("Inner after declaration count:", count);
  }
  inner();
}

outer();

(function arrowInnerVersion() {
  "use strict";
  function outerArrow() {
    var count = 5;
    console.log("outerArrow count before innerArrow:", count);
    const innerArrow = () => {
      console.log("innerArrow sees outerArrow count:", count);
    };
    innerArrow();
  }
  outerArrow();
})();
