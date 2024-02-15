const error1 = document.querySelector(".error1");
const error2 = document.querySelector(".error2");
const error3 = document.querySelector(".error3");
const error4 = document.querySelector(".error4");
const error5 = document.querySelector(".error5");
const button = document.querySelector("#button");
const nameInput = document.querySelector("#name");
const cardNumberInput = document.querySelector("#number");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const cvcInput = document.querySelector("#cvc");
const formInput = document.querySelector(".form-part");
const successInput = document.querySelector(".success-part");
let submit = true;

function nameCheck() {
  let splited = nameInput.value.split(" ");
  if (splited.length == 2) {
    error1.style.display = "none";
  } else {
    error1.style.display = "block";
    submit = false;
  }
}
function cardNumberCheck() {
  let splited = cardNumberInput.value.split("");
  if (splited.length === 16) {
    error2.style.display = "none";
  } else {
    error2.style.display = "block";
    submit = false;
  }
}

function monthCheck() {
  if (monthInput.value >= 1 && monthInput.value <= 12) {
    error3.style.display = "none";
  } else {
    error3.style.display = "block";
    submit = false;
  }
}
function yearCheck() {
  if (yearInput.value >= 25 && yearInput.value <= 30) {
    error4.style.display = "none";
  } else {
    error4.style.display = "block";
    submit = false;
  }
}

function cvcCheck() {
  if (cvcInput.value >= 100 && cvcInput.value <= 999) {
    error5.style.display = "none";
  } else {
    error5.style.display = "block";
    submit = false;
  }
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  submit = true;
  nameCheck();
  cardNumberCheck();
  monthCheck();
  yearCheck();
  cvcCheck();
  if (submit == true) {
    formInput.style.display = "none";
    successInput.style.display = "block";
  }
});

const userName = document.querySelector(".user-name");
nameInput.addEventListener("input", (event) => {
  userName.textContent = event.target.value;
  if (event.target.value.length === 0) {
    userName.textContent = "Jane Applessed";
  }
});

const cardNumber = document.querySelector("h3");
cardNumberInput.addEventListener("input", (event) => {
  if (
    event.inputType !== "deleteContentBackward" &&
    (event.target.value.length == 4 ||
      event.target.value.length == 9 ||
      event.target.value.length == 14)
  ) {
    event.target.value += " ";
  }
  cardNumber.textContent = event.target.value;
  if (event.target.value.length === 0) {
    cardNumber.textContent = "0000 0000 0000 0000";
  }
});

const cardMonth = document.querySelector(".card-month");
monthInput.addEventListener("input", (event) => {
  cardMonth.textContent = event.target.value;
  if (event.target.value.length === 0) {
    cardMonth.textContent = "00";
  }
});
const cardyear = document.querySelector(".card-year");
yearInput.addEventListener("input", (event) => {
  cardyear.textContent = event.target.value;
  if (event.target.value.length === 0) {
    cardyear.textContent = "00";
  }
});
const cardCvc = document.querySelector(".card-cvc");
cvcInput.addEventListener("input", (event) => {
  cardCvc.textContent = event.target.value;
  if (event.target.value.length === 0) {
    cardCvc.textContent = "000";
  }
});
