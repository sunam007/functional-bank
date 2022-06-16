// quick check if js file has been added properly with the html file
// console.log("baap er bank");
// add event listener to deposit button
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // getting value from input field ;

    const depositInputField = document.getElementById("deposit-input");
    const depositAmountString = depositInputField.value;
    // and converting the string to a number;

    const newInputDepositAmount = parseFloat(depositAmountString);
    // getting inner text of Deposit Total (a HTML element) ;

    const depositDisplayElement = document.getElementById("deposit-total");
    // and converting inner text into number;

    const depositDisplayTotal = parseFloat(depositDisplayElement.innerText);
    // updating Total Deposit Value by adding numbers-from-input and numbers-from-dipositDisplay-innerText;

    depositDisplayElement.innerText =
      newInputDepositAmount + depositDisplayTotal;
    // getting inner text of Balance Total (a HTML element) ;
    const balanceDisplayElement = document.getElementById("balance-total");
    //   Updating Total Balance by adding numbers-from-input and numbers-from-balanceDisplay-innerText

    const balanceDisplayTotal = parseFloat(balanceDisplayElement.innerText);
    balanceDisplayElement.innerText =
      newInputDepositAmount + balanceDisplayTotal;

    // reset input field by setting empty string as value;
    depositInputField.value = "";
  });
