/* -------------DASHBOARD------------- */
const depositAmount = document.getElementById('deposit-print');
const withdrawAmount = document.getElementById('withdraw-print');
const totalAmount = document.getElementById('total-print');
const inputDeposit = document.getElementById('deposit-amount');
const btnDeposit = document.getElementById('btn-deposit');
const inputWithdraw = document.getElementById('withdraw-amount');
const btnWithdraw = document.getElementById('btn-withdraw');
const btnLogOut = document.getElementById('btn-logout');

btnDeposit.addEventListener('click', function () {
  const newDepositAmount = +inputDeposit.value;
  const previousTotalAmount = +totalAmount.innerText;
  const currentDeposit = +depositAmount.innerText;
  const currentTotalDeposit = currentDeposit + newDepositAmount;
  const currentTotalAmount = previousTotalAmount + newDepositAmount;
  totalAmount.innerText = currentTotalAmount;
  depositAmount.innerText = currentTotalDeposit;
  inputDeposit.value = '';
});

btnWithdraw.addEventListener('click', function () {
  const inputWithdrawAmount = +inputWithdraw.value;
  const previousWithdrawAmount = +withdrawAmount.innerText;
  const previousTotalAmount = +totalAmount.innerText;
  if (inputWithdrawAmount <= previousTotalAmount) {
    const currentTotalAmount = previousTotalAmount - inputWithdrawAmount;
    const totalWithdrawAmount = inputWithdrawAmount + previousWithdrawAmount;
    totalAmount.innerText = currentTotalAmount;
    withdrawAmount.innerText = totalWithdrawAmount;
  } else {
    alert('Your Amount is not sufficient :(');
  }
  inputWithdraw.value = '';
});

btnLogOut.addEventListener('click', function () {
  window.location.href = 'index.html';
});
