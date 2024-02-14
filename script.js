const error1 = document.querySelector(".error1");
const error2 = document.querySelector(".error2");
const error3 = document.querySelector(".error3");
const error4 = document.querySelector(".error4");
const error5 = document.querySelector(".error5");
const button = document.querySelector("#button");
const nameInput = document.querySelector("#name");
const cardNumberInput = document.querySelector("#number");
const monthInput = document.querySelector("#month");
let yearInput = document.querySelector("#year");
let cvcInput = document.querySelector("#cvc");

function nameCheck() {
  let splited = nameInput.value.split(" ");
  if (splited.length == 2) {
    error1.style.display = "none";
  } else {
    error1.style.display = "block";
  }
}
function cardNumberCheck() {
  let splited = cardNumberInput.value.split("");
  if (splited.length === 16) {
    error2.style.display = "none";
  } else {
    error2.style.display = "block";
  }
}

function monthCheck() {
  if (monthInput.value >= 1 && monthInput.value <= 12) {
    error3.style.display = "none";
  } else {
    error3.style.display = "block";
  }
}
function yearCheck() {
  if (yearInput.value >= 25 && yearInput.value <= 30) {
    error4.style.display = "none";
  } else {
    error4.style.display = "block";
  }
}

function cvcCheck() {
  if (cvcInput.value >= 100 && cvcInput.value <= 999) {
    error5.style.display = "none";
  } else {
    error5.style.display = "block";
  }
}

button.addEventListener("click", () => {
  nameCheck();
  cardNumberCheck();
  monthCheck();
  yearCheck();
  cvcCheck();
});

const userName = document.querySelector(".user-name");
nameInput.addEventListener("input", (event) => {
  userName.textContent = event.target.value;
});

const cardNumber = document.querySelector("h3");
cardNumberInput.addEventListener("input", (event) => {
  cardNumber.textContent = event.target.value;
});

// const cardMonth = document.querySelector(".card-month");
// monthInput.addEventListener("input", (event) => {
//   cardMonth.textContent = formatCardNumber(event.target.value);
// });
const cardyear = document.querySelector(".card-year");
yearInput.addEventListener("input", (event) => {
  cardyear.textContent = event.target.value;
});
const cardCvc = document.querySelector(".card-cvc");
cvcInput.addEventListener("input", (event) => {
  cardCvc.textContent = event.target.value;
});

function formatCardNumber(cardNumber) {
  cardNumber = cardNumber.replace(/\D/g, "");
  var formattedNumber = "";
  for (var i = 0; i < cardNumber.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formattedNumber += " ";
    }
    formattedNumber += cardNumber[i];
  }

  return formattedNumber;
}
