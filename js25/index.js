/*------------Task 1--------------*/
// let age = prompt("How old are you?", 0);
// if (age >= 0 && age < 2) {
//   console.log("baby");
// } else if (age >= 12 && age < 18) {
//   console.log("teenager");
// } else if (age >= 18 && age < 60) {
//   console.log("adult");
// } else if (age >= 60) {
//   console.log("old");
// }

/*------------Task 2--------------*/
// let number = prompt("Enter nubmber 0-9");
// if ((number = 0)) {
//   console.log(")");
// } else if ((number = 1)) {
//   console.log("!");
// } else if ((number = 2)) {
//   console.log("@");
// } else if ((number = 3)) {
//   console.log("#");
// } else if ((number = 4)) {
//   console.log("$");
// } else if ((number = 5)) {
//   console.log("%");
// } else if ((number = 6)) {
//   console.log("^");
// } else if ((number = 7)) {
//   console.log("&");
// } else if ((number = 8)) {
//   console.log("*");
// } else if ((number = 9)) {
//   console.log("(");
// }

/*------------Task 3--------------*/
// let number = prompt("Enter number 100-999");
// if (
//   number[0] == number[1] ||
//   number[0] == number[2] ||
//   number[1] == number[2]
// ) {
//   console.log("Have the same numbers");
// } else console.log("don`t have the same numbers");

/*------------Task 4--------------*/
// let year = prompt("Enter year");
// if (year % 400 == 0 && year % 100 !== 0) {
//   alert("Leap year");
// } else alert("Not leap Year");

/*------------Task 5--------------*/
// let number = prompt("Enter the number from 10000 to 99999");
// number = number + "";
// if (number == number.split("").reverse().join("")) alert("palindrome");
// else alert("NOT palindrome");

/*------------Task 6--------------*/
// let amount = prompt("Enter the amount of USD:");
// console.log(amount * 0.86 + " EUR");
// console.log(amount * 26.35 + " UAH");
// console.log(amount * 1.7 + " AZN");

/*------------Task 7--------------*/
// let amount = prompt("Enter the value of purchase:");
// if (amount >= 200 && amount < 300)
//   alert((amount / 100) * 97 + "$ with 3% discount");
// else if (amount >= 300 && amount < 500)
//   alert((amount / 100) * 95 + "$ with 5% discount");
// else if (amount >= 500) alert((amount / 100) * 93 + "$ with 7% discount");

/*------------Task 8--------------*/
// let lengthCircle = prompt("Enter the length of the circle");
// let perimeterSquare = prompt("Enter perimeter of a square");
// if (lengthCircle >= perimeterSquare / 2) {
//   alert("True");
// } else alert("False");

/*------------Task 9--------------*/

// alert("Answer 3 questions:");
// let points = 0;
// while (1) {
//     let q1 = prompt("1*1= (0|1|2)");
//     console.log(q1);
//   if (q1 === 0 || q1 === 1 || q1 === 2) {
//       q1 == 1 ? score++;
//   } else
//     alert("Wrong answer!");
//     break;
// }

// while (1) {
//   var q2 = prompt("1+1= (0|1|2)");
//   if (q2 === 0 || q2 === 1 || q2 === 2) {
//     q2 == 2 ? score++ : alert("Wrong answer!");
//     break;
//   }
// }

// while (1) {
//   var q3 = prompt("√1= (0|1|2)");
//   if (q3 === 0 || q3 === 1 || q3 === 2) {
//     q3 == 1 ? score++ : alert("Wrong answer!");
//     break;
//   }
// }
// alert("Your score:" + score);

/*------------Task 10--------------*/
// let date = prompt("Enter the date - day.month.year ");
// date = date.split(".");
// let oldDate = new Date(date[2], date[1] - 1, date[0]);
// oldDate.setDate(oldDate.getDate() + 1);
// alert(oldDate);
