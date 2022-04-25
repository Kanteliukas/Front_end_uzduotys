// for (let number = 1; number < 101; number++) {
//   let divisableOfThree = number % 3 == 0;
//   let divisableOfFive = number % 5 == 0;
//   if (divisableOfThree) {
//     if (divisableOfFive) {
//       console.log("FizzBuzz");
//     } else console.log("Fizz");
//   } else if (divisableOfFive) {
//     console.log("Buzz");
//   } else console.log(number);
// }

// for (let number = 1; number < 101; number++) {
//   let divisableOfThree = number % 3 == 0;
//   let divisableOfFive = number % 5 == 0;
//   let result = "";
//   if (divisableOfThree) {
//     result += "Fizz";
//   }
//   if (divisableOfFive) {
//     result += "Buzz";
//   }
//   result = result ? result : number
//   console.log (result)
// }

function checkDivisions(number) {
  let divisableOfThree = number % 3 == 0;
  let divisableOfFive = number % 5 == 0;
  return divisableOfThree & divisableOfFive ? "FizzBuzz"
    : divisableOfThree ? "Fizz"
    : divisableOfFive ? "Buzz"
    : number;
}

for (let number = 1; number < 101; number++) {   
  console.log(checkDivisions(number));
}
