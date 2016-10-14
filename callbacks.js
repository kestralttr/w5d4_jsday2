// class Clock {
//
//   constructor() {
//     // 1. Create a Date object.
//     // 2. Store the hours, minutes, and seconds.
//     // 3. Call printTime.
//     // 4. Schedule the tick at 1 second intervals.
//     this.d = new Date();
//     this.hours = this.d.getHours();
//     this.mins = this.d.getMinutes();
//     this.secs = this.d.getSeconds();
//     this.printTime();
//     setInterval(this._tick.bind(this), 1000);
//   }
//
//   printTime() {
//     // Format the time in HH:MM:SS
//     // Use console.log to print it.
//     console.log(`${this.hours}:${this.mins}:${this.secs}`);
//   }
//
//   _tick() {
//     // 1. Increment the time by one second.
//     // 2. Call printTime.
//     this.d.setSeconds(this.d.getSeconds() + 1)
//     this.hours = this.d.getHours();
//     this.mins = this.d.getMinutes();
//     this.secs = this.d.getSeconds();
//
//     //
//     // this.secs += 1;
// //     this.printTime();
//   }
// }

// const clock = new Clock();


// const readline = require('readline');
//
// const reader = readline.createInterface({
//   // it's okay if this part is magic; it just says that we want to
//   // 1. output the prompt to the standard output (console)
//   // 2. read input from the standard input (again, console)
//
//   input: process.stdin,
//   output: process.stdout
// });
// //
// function addNumbers(sum, numsLeft, completionCallback){
//   if (numsLeft <= 0) {
//     reader.close();
//     return completionCallback(sum);
//   }
//   console.log(numsLeft);
//   reader.question("Enter a number: ", function (answer) {
//     let num = parseInt(answer);
//     console.log(`You entered: ${answer}`);
//     sum += num;
//     addNumbers(sum, numsLeft-1, completionCallback);
//   });
//
// }
// //
// addNumbers(0, 5, sum => console.log(`Total Sum: ${sum}`));


// const readline = require('readline');
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
//
//   function askIfGreaterThan(el1,el2,callback) {
//     reader.question(`Should ${el1} > ${el2}?`, function (answer) {
//       if (answer === "yes") {
//         callback(true);
//       }
//       else {
//         callback(false);
//       }
//     });
//   }
//
//   function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
//     if (i < arr.length - 1) {
//       askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan) => {
//         console.log(`${isGreaterThan}`)
//         if (isGreaterThan === true){
//           //sort some stuff swap items
//           console.log("here!")
//           let temp = arr[i]
//           arr[i] = arr[i+1]
//           arr[i+1] = temp
//           //update madeAnySwaps = true
//           madeAnySwaps = true
//           //call innerBubbleSortLoop(with i+1)
//           return innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop)
//         } else { innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop)}
//       })
//     } else {
//       outerBubbleSortLoop(madeAnySwaps)
//       return
//     }
//   }
//
//   function callback(isGreaterThan){
//     console.log(`${isGreaterThan}`)
//     if (isGreaterThan === 'true'){
//       //sort some stuff swap items
//       [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
//       //update madeAnySwaps = true
//       madeAnySwaps = true
//       //call innerBubbleSortLoop(with i+1)
//       innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop)
//     }
//   }
//
//   function absurdBubbleSort(arr, sortCompletionCallback) {
//     function outerBubbleSortLoop(madeAnySwaps) {
//       if (madeAnySwaps === true) {
//         innerBubbleSortLoop(arr, 0, madeAnySwaps = false, outerBubbleSortLoop)
//       } else {
//         sortCompletionCallback(arr)
//       }
//     }
//     outerBubbleSortLoop(madeAnySwaps = true)
//   }
//   // askIfGreaterThan(5,3,(result) => console.log(result))
//
// absurdBubbleSort([1,3,2], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

// Function.prototype.myBind = function(obj) {
//   return () => {this.apply(obj)}
// }
//
// class Lamp {
//   constructor() {
//     this.name = "a lamp";
//   }
// }
//
// const turnOn = function() {
//    console.log("Turning on " + this.name);
// }
//
// const lamp = new Lamp();
//
// turnOn(); // should not work the way we want it to
//
// const boundTurnOn = turnOn.bind(lamp);
// const myBoundTurnOn = turnOn.myBind(lamp);
//
// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"
