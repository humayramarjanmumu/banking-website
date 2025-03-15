document.getElementById('btn-cashout-money').addEventListener('click', function (event) {
    event.preventDefault();
    const cashOutString = document.getElementById('cash-out-input').value;
    const cashOut = parseFloat(cashOutString);
    const pinNumber = document.getElementById('pin-cashout-input').value;

    if (pinNumber === '1321') {
        const currentBalanceString = document.getElementById('account-balance').innerText;
        const currentBalance = parseFloat(currentBalanceString);

        const newBalance = currentBalance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;
    }
})