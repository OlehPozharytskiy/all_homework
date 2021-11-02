/*------------Task 1------------Працює вірно--*/
// Подсчитать сумму всех чисел в заданном пользователем диапазоне.

// let a = Number(prompt("Початкове значення"));
// let b = Number(prompt("Кінцеве значення"));
// let sum = 0;

// while (a <= b) {
//   a++;
//   sum += a;
//   console.log(sum);
// }

// alert(sum);

/*------------Task 2---------Працює вірно-----*/
// Запросить 2 числа и найти только наибольший общий делитель

// let numb1 = Numberprompt(("Введіть перше число"));
// let numb2 = Numberprompt(("Введіть друге число"));

// let nod = (c, d) => {
//   if (d !== 0) {
//     const k = c % d;
//     return nod(d, k);
//   }
//   return c;
// };

// alert(nod(numb1, numb2));

/*------------Task 3--------Працює вірно------*/
// Запросить у пользователя число и вывести все делители этого числа.

// let num = Number(prompt("Введіть число"));

// for (let i = 1; i <= num; i++) {
//   if (!(num % i)) {
//     alert(i);
//   }
// }

/*------------Task 4---------Працює вірно-----*/
// Определить количество цифр в введенном числе.

// let numLength = +prompt("Введіть число");

// function length(l) {
//   for (var i = 0; l > 1; i++) {
//     l /= 10;
//   }
//   return i;
// }

// alert(length(numLength));

/*------------Task 5--------------*/
// todo не забути зробити.
/* Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей.
При этом также посчитать, сколько четных и нечетных.Вывести статистику на экран.Учтите,
что достаточно одной переменной(не 10) для ввода чисел пользователем.*/

/*------------Task 6-------Працює вірно-------*/
/*Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, 
вывести результат и спросить, хочет ли он решить еще один пример. 
И так до тех пор, пока пользователь не откажется.*/

// do {
//   let a = +prompt("Введіть перше число");
//   let b = +prompt("Введіть друге число");
//   let i = prompt("Введіть знак: - + / *");

//   switch (i) {
//     case "+":
//       alert(a + b);
//       break;
//     case "-":
//       alert(a - b);
//       break;
//     case "/":
//       alert(a / b);
//       break;
//     case "*":
//       alert(a * b);
//       break;
//   }
// } while (confirm("Повторити?"));

/*------------Task 7--------Працює вірно------*/
// Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).

// let numb = prompt("Введите число!");
// let numbSlice = prompt("На сколько цифр его сдвинуть?");

// alert(numb.slice(numbSlice) + numb.slice(0, numbSlice));

/*------------Task 8---------Працює вірно-----*/
/*Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» 
и так до тех пор, пока пользователь нажимает OK.*/

// const days = [
//   "Понедельник",
//   "Вторник",
//   "Среда",
//   "Четверг",
//   "Пятница",
//   "Суббота",
//   "Воскресенье",
// ];
// let Day = 0;

// while (confirm(`${days[Day]}. Хотите увидеть следующий день?`)) {
//   Day = Day + 1;
// }

/*------------Task 9--------Працює вірно------*/
// Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.

document.write("<h1 style = 'text-align: center;'>Табличка множення</h1>");
document.write(
  "<div style='display: flex;width: 1200px;justify-content: center;'>"
);
for (let j = 1; j <= 9; j++) {
  document.write("<div style='margin: 10px;'>");

  for (let i = 1; i <= 9; i++) {
    document.write(i + "*" + j + "=" + i * j + "<br>");
  }
  document.write("</div>");
}
document.write("</div>");

/*------------Task 10--------Працює вірно------*/
/*Игра «Угадай число». Предложить пользователю загадать число от 0 до 100
 и отгадать его следующим способом: каждую итерацию цикла делите диапазон
  чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, 
  < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. 
  Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, 
  что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.*/

let name = "";
let num = Math.floor(Math.random() * 100);
let guesses = 0;

const output = document.querySelector("#output");
const prompt = document.querySelector("#prompt");
const input = document.querySelector("#prompt input");

prompt.addEventListener("submit", handleSubmit);

printMessage("Введіть ім'я гравця");

function handleSubmit(event) {
  event.preventDefault();

  processInput(input.value);

  input.value = "";
}

function printMessage(message) {
  let li = document.createElement("li");

  li.textContent = message;

  output.appendChild(li);
}

function clearOutput() {
  for (let i = 0; i < output.children.length; i++) {
    output.removeChild(output.children[i]);
  }
}

function processInput(input) {
  if (!input) return;
  if (!name) {
    name = input;
    clearOutput();
    printMessage(`${name}, Загадано число від 0 до 100. відгадаєш?`);
    return;
  }

  printMessage(input);

  let guess = Number.parseInt(input);

  if (Number.isNaN(guess)) return;

  guesses += 1;

  if (guess > num) {
    printMessage("Забагато");
  } else if (guess < num) {
    printMessage("Замало");
  } else {
    printMessage(`Вірно, число ${guess}`);
    printMessage(`Кількисть спроб ${guesses}`);
    printMessage("Game Over");
  }
}
