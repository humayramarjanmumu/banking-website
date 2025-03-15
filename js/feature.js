//  show add-money form
document.getElementById('add-money-show').addEventListener('click', function () {
    // hide cash out btn
    document.getElementById('cashout-form').classList.add('hidden');
    // show add money btn
    document.getElementById('add-money-form').classList.remove('hidden');
})


// / show cash out form
document.getElementById('cash-show-co').addEventListener('click', function () {
    // show cash out btn
    document.getElementById('cashout-form').classList.remove('hidden');
    // hide add money btn
    document.getElementById('add-money-form').classList.add('hidden');
})