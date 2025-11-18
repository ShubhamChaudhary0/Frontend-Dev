function demoNonStrict(a, aDuplicate) {
  console.log("Non-strict demo start");
  total = 10;
  console.log("Non-strict total before delete:", total);
  const deleteResult = delete globalThis.total;
  console.log("Non-strict delete result:", deleteResult, "total after delete:", globalThis.total);
}

demoNonStrict(5, 10);

(function strictVersionWrapper() {
  "use strict";
  console.log("Strict version start");
  try {
    const strictResult = eval("var x = 10; delete x;");
    console.log("Strict eval delete result:", strictResult);
  } catch (e) {
    console.log("Strict mode error when deleting identifier:", e.message);
  }
})();

(function es6Correct() {
  "use strict";
  const demo = (a, b) => {
    let total = 10;
    console.log("ES6 demo a:", a, "b:", b, "total:", total);
  };
  demo(5, 10);
})();
