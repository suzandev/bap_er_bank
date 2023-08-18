document.getElementById("btn_submit").addEventListener("click", function () {
  const userEmail = document.getElementById("user_email").value;
  const userPassword = document.getElementById("user_password").value;

  console.log(userEmail, userPassword);

  if (userEmail === "baperBank@gmail.com" && userPassword === "12345") {
    //connect to bank account page
    window.location.href = "./bank.html";
  } else if (userEmail === "" && userPassword === "") {
    alert("Please enter your email & password");
  } else if (userEmail !== "baperBank@gmail.com") {
    alert("Please enter your valid email");
  } else if (userPassword !== "12345") {
    alert("Please enter your valid password");
  } else {
    alert("Please fill in the required fields");
  }
});
