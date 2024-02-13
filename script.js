const error1 = document.querySelector(".error1");
const error2 = document.querySelector(".error2");
const error3 = document.querySelector(".error3");
const error4 = document.querySelector(".error4");
const error5 = document.querySelector(".error5");
const button = document.querySelector("#button");

function nameCheck() {
  let nameInput = document.querySelector("#name").value;
  let splited = nameInput.split(" ");
  if (splited.length == 2) {
    error1.style.display = "none";
  } else {
    error1.style.display = "block";
  }
}
function cardNumberCheck() {
  let cardNumberInput = document.querySelector("#number").value;
  let splited = cardNumberInput.split("");
  if (splited.length === 16) {
    error2.style.display = "none";
  } else {
    error2.style.display = "block";
  }
}

function monthCheck() {
  let monthInput = Number(document.querySelector("#month").value);
  if (monthInput >= 1 && monthInput <= 12) {
    error3.style.display = "none";
  } else {
    error3.style.display = "block";
  }
}
function yearCheck() {
  let yearInput = Number(document.querySelector("#year").value);
  if (yearInput >= 25 && yearInput <= 30) {
    error4.style.display = "none";
  } else {
    error4.style.display = "block";
  }
}

function cvcCheck() {
  let cvcInput = Number(document.querySelector("#cvc").value);
  if (cvcInput >= 100 && cvcInput <= 999) {
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
