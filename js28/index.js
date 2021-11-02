// Task 1

// let car = {
//   manufacturer: "Україна",
//   model: "Козачка",
//   issueAge: 2021,
//   averageSpeed: 90,
//   showInformation: function () {
//     alert(
//       "Manufacturer: " +
//         car.manufacturer +
//         "\nМодель: " +
//         car.model +
//         "\nРік виробництва: " +
//         car.issueAge +
//         "\nШвидкість за годину: " +
//         car.averageSpeed +
//         "км/г"
//     );
//   },

//   countingTime: function (distance) {
//     return distance / this.averageSpeed;
//   },
// };

// car.showInformation();
// let hours = car.countingTime(+prompt("Введіть дистанцію"));
// alert("Вам необхідно " + hours + " годин щоб проїїхати дистанції!");

// task 2

let fraction = {
  nominator: 2,
  denominator: 3,
  addition: function (nominator, denominator) {
    let sum = this.nominator / this.denominator + nominator / denominator;
    alert("Сума дробів: " + sum);
  },
  subtruction: function (nominator, denominator) {
    let subtr = this.nominator / this.denominator - nominator / denominator;
    alert(" Різниця дробів: " + subtr);
  },
  product: function (nominator, denominator) {
    let product_ =
      (this.nominator / this.denominator) * (nominator / denominator);
    alert("Множення дробів: " + product_);
  },
  division: function (nominator, denominator) {
    let div = this.nominator / this.denominator / (nominator / denominator);
    alert("Ділення дробів: " + div);
  },
};

let nominator, denominator;
nominator = prompt("Введіть чисельник: ");
denominator = prompt("Введіть знаменник: ");
fraction.addition(nominator, denominator);
fraction.subtruction(nominator, denominator);
fraction.division(nominator, denominator);
fraction.product(nominator, denominator);

// task 3

// let time = {
//   hours: 12,
//   minutes: 45,
//   seconds: 17,
//   showTime: function () {
//     alert(`${this.hours}:${this.minutes}:${this.seconds}`);
//   },
//   addSeconds: function (seconds) {
//     if (seconds <= 0) {
//       alert("You entered incorrect time!");
//     } else if (seconds + this.seconds >= 60) {
//       let differenceMin = Math.floor((this.seconds + seconds) / 60);
//       this.seconds = (this.seconds + seconds) % 60;
//       this.addMinutes(differenceMin);
//     } else {
//       this.seconds += seconds;
//     }
//   },
//   addMinutes: function (minutes) {
//     if (minutes <= 0) {
//       alert("You entered incorrect time!!!");
//     } else if (this.minutes + minutes >= 60) {
//       let differenceHours = Math.floor((this.minutes + minutes) / 60);
//       this.minutes = (this.minutes + minutes) % 60;
//       this.addHours(differenceHours);
//     } else {
//       this.minutes += minutes;
//     }
//   },
//   addHours: function (hours) {
//     if (hours <= 0) {
//       alert("You entered incorrect time!");
//     } else if (hours + this.hours >= 24) {
//       this.hours = (this.hours + hours) % 24;
//     } else {
//       this.hours += hours;
//     }
//   },
// };

// time.showTime();
// time.addHours(25);
// time.showTime();
// time.addMinutes(120);
// time.showTime();
// time.addSeconds(360);
// time.showTime();
