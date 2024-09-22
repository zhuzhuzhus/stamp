document.getElementById('forgot-password-form').addEventListener('submit', function (event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;

  var storedUsername = localStorage.getItem('username');
  var storedEmail = localStorage.getItem('email');
  var storedPhone = localStorage.getItem('phone');

  // alert(storedUsername);
  // alert(storedEmail);
  // alert(storedPhone);

  if (username === storedUsername && email === storedEmail && phone === storedPhone) {
    alert("Your password is: " + localStorage.getItem('password'));
  } else {
    alert("User name, email and mobile phone number do not match, please re-enter!");
  }
});
