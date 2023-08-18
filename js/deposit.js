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
    alert("Invalid deposit amount. Please add your deposit amount.");
  }
});

// =-=-=-=-=-=-= Withdraw functionality for this application -=-=-=-=-=-=-=

document.getElementById("btn_withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw_field").value;
  const withdrawTotal = parseFloat(withdrawField);

  if (!isNaN(withdrawTotal)) {
    const withdrawTotalElement = document.getElementById("withdraw_total");
    const withdrawTotalString = withdrawTotalElement.innerText;
    const withdrawAmountString = parseFloat(withdrawTotalString);

    const depositTotalBalanceElement = document.getElementById("balance_total");
    const depositTotalBalanceString = depositTotalBalanceElement.innerText;
    const depositTotalBalance = parseFloat(depositTotalBalanceString);

    if (depositTotalBalance > withdrawTotal) {
      withdrawTotalElement.innerText = withdrawAmountString + withdrawTotal;
      depositTotalBalanceElement.innerText =
        depositTotalBalance - withdrawTotal;
    } else {
      alert("no enough money to withdraw");
    }

    document.getElementById("withdraw_field").value = "";
  } else {
    alert("Invalid withdraw amount. Please type your withdraw amount 💸.");
  }
});

document.getElementById("backHome").addEventListener("click", function () {
  window.location.href = "./index.html";
});
