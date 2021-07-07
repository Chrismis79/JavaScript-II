// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

function world(){
  let ruler = 'Christine Fletcher';
  console.log(`${ruler} rules the world!`);

  function country(){
    let president = "GI Jane";
    console.log(`${president} wants ${ruler}\'s head!`);

    function state(){
      let whistleBlower = 'Glen Whistle'
      console.log(`${whistleBlower} tells ${ruler} of ${president}\'s planned attack.`)
    }
    state();
  }
  country();
}
world();


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====

let count = 0;

function counterMaker() {
     return count++;
     }
     console.log(counterMaker(count));
     console.log(counterMaker(count));
     console.log(counterMaker(count));  

  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.

// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2


// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.
function countMaker(){
  if(count < 5){
    return count++;
  }else{
    return count=0;
  }
};
console.log(countMaker(count));
console.log(countMaker(count));
console.log(countMaker(count));
console.log(countMaker(count));
console.log(countMaker(count));
console.log(countMaker(count));



// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
let number = 0;

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  function increment(){
    return number++;
  }
  function decrement(){
    return number--;
  }
console.log(increment(number));
console.log(increment(number));
console.log(decrement(number));
console.log(increment(number));
console.log(decrement(number));
console.log(decrement(number));


