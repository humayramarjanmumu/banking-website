// step 01||add even handler to the add money btn
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    // console.log('btn clicked)
    // prevent reload after form submit
    event.preventDefault();

    // step||2 get money to be added to the account
    const addMoneyInputString = document.getElementById('add-money-input').value;

    // pin num provided
    const addPinNumber = document.getElementById('pin-number-input').value;

    // step||3 varify the pin
    // wrong way
    if (addPinNumber === '1321') {
        // get current balance
        const currentBalanceString = document.getElementById('account-balance').innerText;
        const currentBalance = parseFloat(currentBalanceString);
        const addMoneyInput = parseFloat(addMoneyInputString);

        // add new balance
        const newBalance = currentBalance + addMoneyInput;
        // console.log(newBalance);

        // step ||6 update the balance in the UI/Dom
        document.getElementById('account-balance').innerText = newBalance;

    }
    else {
        alert('Failed to add money')
    }
})