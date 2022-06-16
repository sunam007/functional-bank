document.getElementById("login-submit").addEventListener("click", function () {
  //get user email
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  //get user password
  const passwordlField = document.getElementById("user-password");
  const userPassword = passwordlField.value;
  //login info checking and verification
  if (userEmail == "jfahimakhan@gmail.com" && userPassword == "secret") {
    window.location.href = "banking.html";
  } else {
    alert("email or password do not match");
  }
});
