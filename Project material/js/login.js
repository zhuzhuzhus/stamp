document.getElementById("register-btn").addEventListener("click", function () {
  showRegisterForm();
  backButton.style.display = "block";
  if (backButton) {
    backButton.style.display = "none";
  }

});

document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault();

  var loginUsername = document.getElementById("username").value;
  var loginPassword = document.getElementById("password").value;

  if (validateLogin(loginUsername, loginPassword)) {
    if (checkCredentials(loginUsername, loginPassword)) {
      alert("login successfully !");
      window.location.href = "home.html";
    } else {
      alert("Password entered wrong!");
    }
  } else {
    alert("The user does not exist !");
  }
});

function showRegisterForm() {
  var loginForm = document.getElementById("login-form");
  loginForm.style.display = "none";

  var registerBtn = document.getElementById("register-btn");
  registerBtn.style.display = "none";

  var forgetBtn = document.getElementById("forgot-password-btn");
  forgetBtn.style.display = 'none';


  var container = document.getElementsByClassName("container")[0];

  var registerForm = document.createElement("form");
  registerForm.id = "register-form";

  var regUsernameInput = document.createElement("input");
  regUsernameInput.type = "text";
  regUsernameInput.id = "reg-username";
  regUsernameInput.placeholder = "Username";
  registerForm.appendChild(regUsernameInput);

  var regUsernameError = document.createElement("span");
  regUsernameError.id = "reg-username-error";
  regUsernameError.className = "error-message";
  registerForm.appendChild(regUsernameError);

  var regPhoneInput = document.createElement("input");
  regPhoneInput.type = "text";
  regPhoneInput.id = "reg-phone";
  regPhoneInput.placeholder = "Mobile phone number";
  registerForm.appendChild(regPhoneInput);

  var regPhoneError = document.createElement("span");
  regPhoneError.id = "reg-phone-error";
  regPhoneError.className = "error-message";
  registerForm.appendChild(regPhoneError);

  var regPasswordInput = document.createElement("input");
  regPasswordInput.type = "password";
  regPasswordInput.id = "reg-password";
  regPasswordInput.placeholder = "Password";
  registerForm.appendChild(regPasswordInput);

  var regPasswordError = document.createElement("span");
  regPasswordError.id = "reg-password-error";
  regPasswordError.className = "error-message";
  registerForm.appendChild(regPasswordError);

  var confirmPasswordInput = document.createElement("input");
  confirmPasswordInput.type = "password";
  confirmPasswordInput.id = "confirm-password";
  confirmPasswordInput.placeholder = "Confirm password";
  registerForm.appendChild(confirmPasswordInput);

  var confirmPasswordError = document.createElement("span");
  confirmPasswordError.id = "confirm-password-error";
  confirmPasswordError.className = "error-message";
  registerForm.appendChild(confirmPasswordError);

  var regEmailInput = document.createElement("input");
  regEmailInput.type = "email";
  regEmailInput.id = "reg-email";
  regEmailInput.placeholder = "mailbox";
  registerForm.appendChild(regEmailInput);

  var registerSubmitBtn = document.createElement("button");
  registerSubmitBtn.type = "submit";
  registerSubmitBtn.textContent = "REGISTER";
  registerForm.appendChild(registerSubmitBtn);

  container.appendChild(registerForm);

  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var regUsername = regUsernameInput.value;
    var regPhone = regPhoneInput.value;
    var regPassword = regPasswordInput.value;
    var confirmPassword = confirmPasswordInput.value;
    var regEmail = regEmailInput.value;

    if (validateRegistration(regUsername, regPhone, regPassword, confirmPassword, regEmail)) {
      saveRegistration(regUsername, regPhone, regPassword, regEmail);
      alert("Register successfully, please login!");
      showLoginForm();
    } else {
      alert("Registration information verification failed!");
    }
  });

  var backButton = document.getElementById("back-button");
  if (registerForm && !backButton) {
    backButton = document.createElement("button");
    backButton.id = "back-button";
    backButton.className = "btn";
    backButton.textContent = "BACK";
    container.appendChild(backButton);
  }

  backButton.addEventListener("click", function () {
    //   container.removeChild(registerForm);
    //   loginForm.style.display = "block";
    //   registerBtn.style.display = "block";
    //   backButton.style.display = "none";
    window.location.href = "login.html";
  });

  regUsernameInput.addEventListener("input", function () {
    var username = regUsernameInput.value;
    if (!/^[A-Za-z]+$/.test(username)) {
      regUsernameError.textContent = "The user name must be an English letter";
    } else {
      regUsernameError.textContent = "";
    }
  });

  regPhoneInput.addEventListener("input", function () {
    var phone = regPhoneInput.value;
    if (!/^\d+$/.test(phone)) {
      regPhoneError.textContent = "The phone number must be a number";
    } else {
      regPhoneError.textContent = "";
    }
  });

  regPasswordInput.addEventListener("input", function () {
    var password = regPasswordInput.value;
    if (!/^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(password)) {
      regPasswordError.textContent = "The password must contain a combination of English and digits and be at least 6 digits long";
    } else {
      regPasswordError.textContent = "";
    }
  });

  confirmPasswordInput.addEventListener("input", function () {
    var confirmPassword = confirmPasswordInput.value;
    var password = regPasswordInput.value;
    if (confirmPassword !== password) {
      confirmPasswordError.textContent = "Confirm the password must be the same as the password";
    } else {
      confirmPasswordError.textContent = "";
    }
  });
}

function showLoginForm() {
  var loginForm = document.getElementById("login-form");
  loginForm.style.display = "block";

  var registerBtn = document.getElementById("register-btn");
  registerBtn.style.display = "block";

  var forgetBtn = document.getElementById("forgot-password-btn");
  forgetBtn.style.display = 'block';

  var registerForm = document.getElementById("register-form");
  if (registerForm) {
    registerForm.remove();
  }
  var backButton = document.getElementById("back-button");
  if (backButton) {
    backButton.remove();
  }

}

function validateLogin(username, password) {
  if (!username || !password) {
    alert("The username and password cannot be empty!");
    return false;
  }
  return true;
}

function checkCredentials(username, password) {
  var storedUsername = localStorage.getItem("username");
  var storedPassword = localStorage.getItem("password");

  if (username === storedUsername && password === storedPassword) {
    return true;
  }

  return false;
}

function validateRegistration(username, phone, password, confirmPassword, email) {
  var usernameRegex = /^[a-zA-Z]+$/;
  var phoneRegex = /^\d+$/;
  var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;
  var minLength = 6;

  if (!usernameRegex.test(username)) {
    showError("reg-username", "The user name must be a letter");
    return false;
  }

  if (!phoneRegex.test(phone)) {
    showError("reg-phone", "The phone number must be a number");
    return false;
  }

  if (!passwordRegex.test(password)) {
    showError("reg-password", "The password must be a combination of letters and numbers");
    return false;
  }

  if (password.length < minLength) {
    showError("reg-password", "The password must be at least " + minLength + " length");
    return false;
  }

  if (confirmPassword !== password) {
    showError("confirm-password", "Confirm that the password is inconsistent with the password");
    return false;
  }

  return true;
}

function showError(fieldId, errorMessage) {
  var errorField = document.getElementById(fieldId + "-error");
  if (errorField) {
    errorField.textContent = errorMessage;
    errorField.style.display = "block";
  }
}

function hideError(fieldId) {
  var errorField = document.getElementById(fieldId + "-error");
  if (errorField) {
    errorField.style.display = "none";
  }
}

function saveRegistration(username, phone, password, email) {
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);
}