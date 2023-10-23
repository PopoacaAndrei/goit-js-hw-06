const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

// Adăugați un handler pentru evenimentul "input" pentru input#name-input.
nameInput.addEventListener("input", function () {
  // Obțineți valoarea din input#name-input.
  const inputValue = nameInput.value;

  // Verificați dacă input-ul este gol.
  if (inputValue.trim() === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = inputValue;
  }
});
