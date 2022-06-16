function inputStringToNumber(inputId) {
  const inputField = document.getElementById(inputId);
  const amountString = inputField.value;
  const newInputAmount = parseFloat(amountString);
  inputField.value = "";
  return newInputAmount;
}

function innerTextToNumber(elementId) {
  const displayElement = document.getElementById(elementId);
  const displayTotal = parseFloat(displayElement.innerText);
  return displayTotal;
}

//Deposit Event handler;
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // getting deposit input and update total deposit;

    const newInputDepositAmount = inputStringToNumber("deposit-input");
    const depositDisplayTotal = innerTextToNumber("deposit-total");
    if (newInputDepositAmount > 0) {
      document.getElementById("deposit-total").innerText =
        newInputDepositAmount + depositDisplayTotal;
      // updating total balance;
      const balanceDisplayTotal = innerTextToNumber("balance-total");
      document.getElementById("balance-total").innerText =
        newInputDepositAmount + balanceDisplayTotal;
    }
  });

// Withdraw Event handler;
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    // getting withdraw input and update total withdraw;
    const newInputWithdrawAmount = inputStringToNumber("withdraw-input");
    const withdrawDisplayTotal = innerTextToNumber("withdraw-total");
    if (
      newInputWithdrawAmount > 0 &&
      newInputWithdrawAmount <= innerTextToNumber("balance-total")
    ) {
      document.getElementById("withdraw-total").innerText =
        newInputWithdrawAmount + withdrawDisplayTotal;

      // updating total balance
      const balanceDisplayTotal = innerTextToNumber("balance-total");
      document.getElementById("balance-total").innerText =
        balanceDisplayTotal - newInputWithdrawAmount;
    }
  });
