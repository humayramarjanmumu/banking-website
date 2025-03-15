document.getElementById('btn-login').addEventListener('click', function (event) {
    event.preventDefault();
    // console.log('login clicked')

    // get phn number
    const phoneNumber = document.getElementById('phn-number').value;
    // get pin number
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);

    // doing this time only for this project
    if (phoneNumber === '01713211321' && pinNumber === '1321') {
        window.location.href = '/bank.html';
    }
    else {
        alert('Invalid ID & Password');
    }
})