var elSurveyForm = document.querySelector(".survey__form");
var elSurveyInput = elSurveyForm.querySelector(".survey__input");
var elSurveySelect = elSurveyForm.querySelector(".survey__select");
var elSurveyResultBox = elSurveyForm.querySelector(".survey__result");

var USD_to_SOUM = 10880;
var EURO_to_SOUM = 12248.58;
var RUBL_to_SOUM = 144.28;
alert("Hello,this is updating machine and you may update USD,EURO and RUBL, Good luck for your job")

elSurveyForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var firstNumber = Number(elSurveyInput.value.trim());
  var secondNumber = elSurveySelect.value.trim();

  if (isNaN(firstNumber)) {
    elConverterResultBox.textContent = "Enter number";
    return;
  }
  if (secondNumber ==="USD") {
    secondNumber = firstNumber*USD_to_SOUM;
  }

  if (secondNumber == "EURO") {
    secondNumber = firstNumber*EURO_to_SOUM;
  }

  if (secondNumber == "RUBL") {
    secondNumber =firstNumber*RUBL_to_SOUM;
  }

  var resultNumber = " Your budjet will stand "+ secondNumber + " SOUM";

  elSurveyResultBox.textContent = resultNumber;
});
