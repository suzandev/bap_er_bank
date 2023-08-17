// =-=-=-=-=-=-= Deposit functionality for this application -=-=-=-=-=-=-=

document.getElementById("btn_deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit_field").value;
  const depositAmountString = parseFloat(depositField);

  if (!isNaN(depositAmountString)) {
    // Get the deposit_total element
    const depositTotalElement = document.getElementById("deposit_total");
    const depositTotalString = depositTotalElement.innerText;
    const depositTotal = parseFloat(depositTotalString);

    // Get the deposit total Balance element
    const depositTotalBalanceElement = document.getElementById("balance_total");
    const depositTotalBalanceString = depositTotalBalanceElement.innerText;
    const depositTotalBalance = parseFloat(depositTotalBalanceString);

    // Update the content of the deposit_total element
    depositTotalElement.innerText = depositTotal + depositAmountString;

    // Update the content of the balance_total element
    depositTotalBalanceElement.innerText =
      depositTotalBalance + depositAmountString;

    // Clear the deposit_field input
    document.getElementById("deposit_field").value = "";
  } else {
    console.log("Invalid deposit amount. Please enter a valid number.");
  }
});
