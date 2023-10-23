const validationInput = document.getElementById("validation-input");
const validClass = "valid";
const invalidClass = "invalid";

validationInput.addEventListener("blur", function () {
  const inputValue = validationInput.value;
  const expectedLength = parseInt(validationInput.getAttribute("data-length"));

  if (inputValue.length === expectedLength) {
    validationInput.classList.remove(invalidClass);
    validationInput.classList.add(validClass);
  } else {
    validationInput.classList.remove(validClass);
    validationInput.classList.add(invalidClass);
  }
});
