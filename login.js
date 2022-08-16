/* -------------LOGIN PAGE------------- */

// Step-1: add click event handler with the submit button
const btnSubmit = document.getElementById('btn-submit');
// Step-2: get the email address inside the email input field
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
btnSubmit.addEventListener('click', function () {
  // always remember to use .value to get text from an input field.
  // Step-3: get email and  password
  const emailValue = inputEmail.value;
  const passwordValue = inputPassword.value;
  // Step-4: Verify email and password and check whether valid user or not.
  if (
    emailValue.toLowerCase() === 'anamul@gmail.com' &&
    passwordValue === 'Anamul'
  ) {
    window.location.href = 'bank.html';
    // alert('Your Email And Password are matched');
    inputEmail.value = '';
    inputPassword.value = '';
  } else {
    alert('Try again, Your email and password are not matched');
  }
});
