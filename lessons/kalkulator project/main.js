const elForm = document.querySelector("#form");
const result = document.querySelector(".result");

elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const oneValue = parseFloat(elForm["one"].value.trim());
  const twoValue = parseFloat(elForm["two"].value.trim());
  const operation = elForm.querySelector('input[name="operation"]:checked');

  if (!operation) {
    result.textContent = "Iltimos, amalni tanlang!";
    return;
  }

  let calculationResult;

  switch (operation.value) {
    case "plus":
      calculationResult = oneValue + twoValue;
      break;
    case "minus":
      calculationResult = oneValue - twoValue;
      break;
    case "exp":
      calculationResult = Math.pow(oneValue, twoValue);
      break;
    case "devision":
      if (twoValue === 0) {
        calculationResult = "Xato: Nolga bo'lish mumkin emas!";
      } else {
        calculationResult = oneValue / twoValue;
      }
      break;
    case "module":
      calculationResult = oneValue % twoValue;
      break;
    default:
      calculationResult = "No valid operation selected.";
      break;
  }

  result.textContent = `Natija: ${calculationResult}`;
});
