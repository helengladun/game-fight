let fighter = new Fighter("Tracer", 2000, 10);
let improvedFighter = new ImprovedFighter("Junkrat", 2000, 10);
let appBlock = document.querySelector("#app");
let promise = fight(fighter, improvedFighter, 2, 3, 8, 5);

if (promise instanceof Promise) {
  promise.then(
    result => {
      let resultMessage = `${result} in knockout`;
      appBlock.innerHTML = resultMessage;
      console.log(resultMessage);
    },
    error => {
      console.log("Something gone wrong");
    }
  );
} else {
  console.error("Not Promise object returned");
}